import styles from '../styles/Footer.module.css';
import SocialIcons from './social-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row1}>
        <span>
          <a href="https://mananjoshi.me">Manan Joshi</a> &#169; 2020
        </span>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
