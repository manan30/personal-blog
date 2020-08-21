import React from 'react';
import styles from '../styles/Loader.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;