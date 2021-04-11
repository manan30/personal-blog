import SocialIcons from './social-icons';

const Footer = () => {
  return (
    <footer className="w-full py-4 flex text-gray-500 mx-auto px-10 max-w-lg md:px-2 md:max-w-xl lg:max-w-4xl items-center flex-col md:flex-row dark:text-gray-100">
      <span className="mb-3 md:mb-0">
        <a href="https://mananjoshi.me">Manan Joshi</a> &#169;{' '}
        {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
          Date.now()
        )}
      </span>
      <div className="md:ml-auto">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
