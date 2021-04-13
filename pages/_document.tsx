import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../google-analytics';

const getInitialColorMode = `
    const persistedColorPreference = window.localStorage.getItem(
      'manan-joshi-blog-theme'
    );
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (!hasPersistedPreference) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        window.localStorage.setItem(
          'manan-joshi-blog-theme',
          mql.matches ? 'dark' : 'light'
        );
        if (mql.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        window.localStorage.setItem(
          'manan-joshi-blog-theme',
          'light'
        );
        document.documentElement.classList.remove('dark');
      }
    } else {
      if (persistedColorPreference === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  `;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <script dangerouslySetInnerHTML={{ __html: getInitialColorMode }} />
        </Head>
        <body>
          <div className="h-full w-full dark:bg-gray-800 transition duration-500">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
