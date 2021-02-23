import ToggleSwitch from './toggle-switch';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <ToggleSwitch />
    </div>
  );
};

export default Header;