import InstagramIcon from '../public/images/svg/instagram.svg';
import TwitterIcon from '../public/images/svg/twitter.svg';
import EmailIcon from '../public/images/svg/email.svg';
import GithubIcon from '../public/images/svg/github.svg';
import LinkedInIcon from '../public/images/svg/linkedin.svg';
import MediumIcon from '../public/images/svg/medium.svg';
import StackOverflowIcon from '../public/images/svg/stackoverflow.svg';
import styles from '../styles/SocialIcons.module.css';

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      <a href="https://twitter.com/manan__joshi" aria-label="Visit my Twitter">
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/manan__joshi/"
        aria-label="Visit my Instagram"
      >
        <InstagramIcon />
      </a>
      <a href="https://github.com/manan30" aria-label="Visit my Github">
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/mananjoshi1741/"
        aria-label="Visit my LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a href="https://medium.com/@Manan_30" aria-label="Visit my Medium">
        <MediumIcon />
      </a>
      <a
        href="https://stackoverflow.com/users/5266912/manan-joshi"
        aria-label="Visit my Stack Overflow"
      >
        <StackOverflowIcon />
      </a>
      <a href="mailto:mananjoshi1995@gmail.com" aria-label="Send me an email">
        <EmailIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
