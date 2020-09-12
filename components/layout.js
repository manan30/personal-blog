import Footer from './footer';
import Header from './header';
import Meta from './meta';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
