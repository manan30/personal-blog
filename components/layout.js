import Meta from './meta';
import Footer from './footer';

function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
