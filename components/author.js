import styles from '../styles/Author.module.css';

function Author() {
  return (
    <div className={styles.container}>
      <img
        className={styles.authorImg}
        alt="Profile"
        src="/images/profile-picture.jpg"
      />
      <div className={styles.infoContainer}>
        <div style={{ marginBottom: '0.5rem' }}>
          Personal blog by
          <a href="https://mananjoshi.me"> Manan Joshi</a>
        </div>
        <div>
          I&apos;m a passionate full-stack developer and love working with web
          technologies. Come say hi on{' '}
          <a href="https://twitter.com/manan__joshi">Twitter</a> or{' '}
          <a href="https://www.instagram.com/manan__joshi/?hl=en">Instagram</a>!
        </div>
      </div>
    </div>
  );
}

export default Author;
