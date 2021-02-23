import Footer from './footer';
import Header from './header';
import Meta from './meta';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
