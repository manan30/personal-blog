export const GA_TRACKING_ID = 'UA-168037223-4';

export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};
