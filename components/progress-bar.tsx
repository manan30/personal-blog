import React, { useCallback, useEffect, useState } from 'react';

const ProgressBar = () => {
  const [currentPosition, setCurrentPosition] = useState('0');

  const progressBarHandler = useCallback(() => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}%`;
    ``;

    setCurrentPosition(scroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', progressBarHandler);

    return () => window.removeEventListener('scroll', progressBarHandler);
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 dark:bg-green-200 bg-blue-200"></div>
      <div
        className="fixed top-0 left-0 w-0 h-1 dark:bg-green-500 bg-blue-800 transition-all"
        style={{ width: currentPosition }}
      ></div>
    </>
  );
};

export default ProgressBar;
