// Development environment detection
const isDevelopment = import.meta.env.DEV;

// Log events in development mode
const logEvent = (eventName, properties) => {
  if (isDevelopment) {
    console.log('📊 Analytics Event:', eventName, properties);
  }
};

// Safely check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && 
         typeof window.gtag === 'function';
};

// Core tracking function with error handling
export const trackEvent = (eventName, params = {}) => {
  try {
    logEvent(eventName, params);
    
    if (!isGtagAvailable()) {
      if (isDevelopment) {
        console.warn('📊 gtag not available - event not sent:', eventName);
      }
      return;
    }
    
    window.gtag('event', eventName, params);
  } catch (error) {
    if (isDevelopment) {
      console.error('📊 Analytics Error:', error);
    }
  }
};

// Track page views
export const trackPageView = (path) => {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title,
    event_category: 'navigation'
  });
};

// Track CTA clicks
export const trackCTAClick = (section, element) => {
  if (!section || !element) {
    console.warn('trackCTAClick: section and element are required');
    return;
  }
  
  const eventName = `${section}_${element}_click`.toLowerCase();
  trackEvent(eventName, {
    event_category: 'conversion',
    event_label: `${section} - ${element}`,
    cta_location: section
  });
};

// Track project card clicks
export const trackProjectClick = (projectName, source = 'project_card') => {
  if (!projectName) {
    console.warn('trackProjectClick: projectName is required');
    return;
  }
  
  trackEvent(`${source}_view_click`, {
    event_category: 'engagement',
    event_label: projectName,
    project_name: projectName
  });
};

// Track file downloads
export const trackDownload = (fileName, location) => {
  if (!fileName) {
    console.warn('trackDownload: fileName is required');
    return;
  }
  
  trackEvent('file_download', {
    event_category: 'conversion',
    event_label: fileName,
    download_location: location || 'unknown'
  });
};

// Track engagement actions
export const trackEngagement = (component, action, label) => {
  if (!component || !action) {
    console.warn('trackEngagement: component and action are required');
    return;
  }
  
  const eventName = `${component}_${action}`.toLowerCase();
  trackEvent(eventName, {
    event_category: 'engagement',
    event_label: label || '',
    component: component
  });
};

// Export default object with all functions
export default {
  trackEvent,
  trackPageView,
  trackCTAClick,
  trackProjectClick,
  trackDownload,
  trackEngagement,
};