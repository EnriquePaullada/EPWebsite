import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WEBHOOK_URL = "https://pehcao.app.n8n.cloud/webhook/65046bcb-2ba8-40de-bdd7-629a1aee5ab3";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [],
    message: '',
  });

  const interestOptions = [
    'Founding AI Engineer',
    'AI Engineer',
    'Technical Product Manager',
    'Consulting Project',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing info", description: "Please complete name, email, and message." });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        source: "website",
        page: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        timestamp: new Date().toISOString(),
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Webhook error (${res.status}): ${text || res.statusText}`);
      }

      toast({
        title: "Message sent ✅",
        description: "Thanks! I’ll get back to you shortly.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        interests: [],
        message: '',
      });
    } catch (err) {
      toast({
        title: "Couldn’t send your message",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="md:col-span-2"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="ui-sans block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="ui-sans block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="ui-sans block text-sm font-semibold text-gray-700 mb-2">
            Company (Optional)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
            placeholder="Your company"
          />
        </div>

        <div>
          <label className="ui-sans block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
            placeholder="Tell me about yourself or your current challenges!!"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1A2A40] hover:bg-[#D4AF37] disabled:opacity-60 disabled:cursor-not-allowed text-white ui-sans text-base py-6 transition-all transform hover:scale-105"
        >
          <Send className={`mr-2 w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>


        <p className="ui-sans text-xs text-gray-500 text-center">
          I typically respond within 24-48 hours
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;