import SocialIcons from './social-icons';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className="w-full py-4 flex justify-center flex-col text-gray-500">
      <div className={styles.row1}>
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
