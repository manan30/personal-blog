import Footer from './footer';
import Header from './header';
import Meta from './meta';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto px-6 max-w-lg md:px-0 md:max-w-xl lg:max-w-4xl">
      <Header />
      <Meta />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
