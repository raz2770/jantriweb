// Analytics and SEO tracking utilities

// Google Analytics 4 setup
export const initGA4 = (measurementId) => {
  if (typeof window !== 'undefined') {
    window.gtag = window.gtag || function() {
      (window.gtag.q = window.gtag.q || []).push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Track events for SEO
export const trackEvent = (eventName, eventCategory, eventLabel) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
    });
  }
};

// Track app downloads
export const trackDownload = (platform) => {
  trackEvent('download_app', 'engagement', platform);
  
  // Also track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: 1.0,
      currency: 'INR'
    });
  }
};

// Track subscription events
export const trackSubscription = (planName, planPrice) => {
  trackEvent('subscription', 'purchase', planName);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: planPrice,
      currency: 'INR',
      items: [{
        item_id: planName.toLowerCase().replace(' ', '_'),
        item_name: planName,
        category: 'subscription',
        quantity: 1,
        price: planPrice
      }]
    });
  }
};

// Track search events (for internal search)
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'engagement', searchTerm);
};

// Track contact form submissions
export const trackContact = (contactMethod) => {
  trackEvent('contact', 'engagement', contactMethod);
};

// Facebook Pixel tracking
export const initFBPixel = (pixelId) => {
  if (typeof window !== 'undefined') {
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }
};

// Track FB custom events
export const trackFBEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};
