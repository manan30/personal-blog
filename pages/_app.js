import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import defaultSEOValues from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSEOValues} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
