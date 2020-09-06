import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>
          &#169; Copyright 2020 <a href="https://mananjoshi.me">Manan Joshi</a>
        </span>
      </div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Vercel
      </a>
    </footer>
  );
}

export default Footer;
