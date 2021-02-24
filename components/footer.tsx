import SocialIcons from './social-icons';

const Footer = () => {
  return (
    <footer className="w-full py-4 flex justify-center flex-col text-gray-500">
      <div className="flex items-center justify-around">
        <span>
          <a href="https://mananjoshi.me">Manan Joshi</a> &#169;{' '}
          {new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
            Date.now()
          )}
        </span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
