import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import defaultSEOValues from '../next-seo.config';
import { pageView } from '../google-analytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...defaultSEOValues} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
