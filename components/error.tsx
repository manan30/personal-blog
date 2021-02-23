import React, { useState, useEffect } from 'react';
import styles from '../styles/Error.module.css';

type ErrorProps = {
  message?: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowing(true), 5000);
  }, []);

  return (
    !completed && (
      <div
        className={[
          styles.container,
          !isShowing ? styles.enter : styles.exit
        ].join(' ')}
        onAnimationEndCapture={() => {
          if (isShowing) {
            setCompleted(true);
          }
        }}
      >
        <div>{message || 'Error occurred while fetching data'}</div>
        <div>Please refresh the page after sometime</div>
      </div>
    )
  );
};

export default Error;
