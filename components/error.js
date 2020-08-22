import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Error.module.css';

function Error({ message }) {
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
}

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: ''
};

export default Error;
