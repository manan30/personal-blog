import Footer from './footer';
import Header from './header';
import Meta from './meta';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Meta />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
