export const GA_TRACKING_ID = 'UA-168037223-4';

export const pageView = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};
