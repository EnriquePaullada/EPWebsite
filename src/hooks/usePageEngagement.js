import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

const usePageEngagement = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Reset timer on route change
    startTime.current = Date.now();

    return () => {
      // Calculate time spent when component unmounts or route changes
      const endTime = Date.now();
      const duration = Math.round((endTime - startTime.current) / 1000);

      // Only track if user spent more than 2 seconds
      if (duration > 2) {
        trackEvent('page_engagement_time', {
          page_path: location.pathname,
          duration_seconds: duration,
          event_category: 'Engagement'
        });
      }
    };
  }, [location.pathname]);
};

export default usePageEngagement;