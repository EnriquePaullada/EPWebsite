import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Loader2, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent, trackEngagement } from '@/lib/analytics';
import { useToast } from '@/components/ui/use-toast';

/* ---------- Constants & Helpers ---------- */

const COMPONENT = 'feedback_widget';
const NUDGE_DELAY_MS = 40000;       // 20s
const NUDGE_HIDE_MS = 5000;         // 5s
const RESET_AFTER_CLOSE_MS = 300;   // ms

// n8n endpoint instead of formspree
const FORMSPREE_ENDPOINT =
  'https://pehcao.app.n8n.cloud/webhook/65046bcb-2ba8-40de-bdd7-629a1aee5ab3';

const getPagePath = () =>
  (typeof window !== 'undefined' ? window.location.pathname : '');

// Wrap analytics to automatically attach page_path + component
const trackWidgetEvent = (eventName, extra = {}) => {
  trackEvent(eventName, {
    page_path: getPagePath(),
    ...extra,
  });
};

const trackWidgetEngagement = (action, label) => {
  trackEngagement(
    COMPONENT,
    action,
    label || getPagePath()
  );
};

/* ---------- Component ---------- */

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  // controls the little “nudge” bubble
  const [showNudge, setShowNudge] = useState(false);

  const { toast } = useToast();

  /* ----- ESC key + body scroll lock ----- */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose('escape');
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  /* ----- Show nudge 20s after load (per visit) ----- */
  useEffect(() => {
    if (isOpen) return;

    const timer = window.setTimeout(() => {
      if (!isOpen) {
        setShowNudge(true);
        trackWidgetEngagement('nudge_shown');
      }
    }, NUDGE_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  /* ----- Auto-hide nudge after 5s or any click ----- */
  useEffect(() => {
    if (!showNudge) return;

    const hideTimer = window.setTimeout(() => {
      setShowNudge(false);
      trackWidgetEngagement('nudge_auto_hide');
    }, NUDGE_HIDE_MS);

    const handleClickAnywhere = () => {
      setShowNudge(false);
      trackWidgetEngagement('nudge_dismiss_click_anywhere');
    };

    document.addEventListener('click', handleClickAnywhere);

    return () => {
      window.clearTimeout(hideTimer);
      document.removeEventListener('click', handleClickAnywhere);
    };
  }, [showNudge]);

  /* ----- Open / Close handlers ----- */

  // Open widget (button or nudge)
  const openWidget = (source = 'button') => {
    setIsOpen(true);

    trackWidgetEvent('feedback_widget_opened', { source });
    trackWidgetEngagement('open', source);
  };

  // Centralized close handler with reason
  const handleClose = (reason = 'unknown') => {
    setIsOpen(false);

    trackWidgetEvent('feedback_widget_closed', { reason });
    trackWidgetEngagement('close', reason);

    // Reset state after transition
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ email: '', message: '' });
    }, RESET_AFTER_CLOSE_MS);
  };

  /* ----- Submit handler ----- */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const hasEmail = !!formData.email;
    const messageLength = formData.message.trim().length;

    trackWidgetEvent('feedback_submit_attempt', {
      has_email: hasEmail,
      message_length: messageLength,
    });
    trackWidgetEngagement('submit_attempt');

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);

        trackWidgetEvent('feedback_submitted', {
          status: 'success',
          has_email: hasEmail,
        });
        trackWidgetEngagement('submit_success');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Feedback error:', error);

      trackWidgetEvent('feedback_submitted', { status: 'error' });
      trackWidgetEngagement('submit_error');

      toast({
        variant: 'destructive',
        title: 'Error sending feedback',
        description: 'Please try again later or contact me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- Render ---------- */

  return (
    <>
      {/* Floating Trigger Button + Nudge */}
      <div
        className={`fixed bottom-6 left-6 md:right-6 md:left-auto z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-start md:items-end gap-2">
          {showNudge && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowNudge(false);
                trackWidgetEngagement('nudge_click');
                openWidget('nudge');
              }}
              className="relative max-w-[260px] p-4 rounded-xl shadow-xl border border-[#0D2238] bg-[#1A2A40] text-white animate-fadeIn cursor-pointer group"
            >
              <p className="text-sm font-semibold mb-1">
                WHAT&apos;S ON YOUR MIND?
              </p>
            </div>
          )}

          <Button
            onClick={() => openWidget('button')}
            className="rounded-full w-14 h-14 shadow-lg bg-[#1A2A40] hover:bg-[#0D4AF3] text-white transition-all duration-300 hover:scale-110 flex items-center justify-center p-0"
            aria-label="Open Feedback Form"
          >
            <MessageSquare className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => handleClose('backdrop')}
          />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
              <h2
                id="feedback-title"
                className="heading-serif text-xl font-bold text-[#1A2A40]"
              >
                {isSuccess ? 'Thank You!' : 'Welcome!'}
              </h2>
              <button
                onClick={() => handleClose('header_button')}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="heading-serif text-2xl font-bold text-[#1A2A40]">
                    Message Sent
                  </h3>
                  <p className="body-serif text-gray-600 max-w-xs">
                    Thank you for your insight!
                  </p>
                  <Button
                    onClick={() => handleClose('success_button')}
                    className="mt-4 ui-sans bg-[#1A2A40] hover:bg-[#D4AF37] text-white"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="body-serif text-sm text-gray-600 font-bold mb-4">
                    What [technical/business] challenges are on top of your mind for the next 2-5 months?  
                  </p>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Email (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2A40] focus:border-transparent ui-sans text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A2A40] focus:border-transparent ui-sans text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.message.trim()}
                      className="w-full bg-[#1A2A40] hover:bg-[#D4AF37] text-white ui-sans py-6 text-base disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Feedback
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;