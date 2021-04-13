import React, { useEffect, useState } from 'react';
import { LightBulbIcon as LightBulbIconDark } from '@heroicons/react/solid';
import { LightBulbIcon } from '@heroicons/react/outline';

const ToggleSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCurrentTheme(localStorage.getItem('manan-joshi-blog-theme'));
    }
  }, [mounted]);

  const clickHandler = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('manan-joshi-blog-theme', 'light');
    } else {
      setCurrentTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('manan-joshi-blog-theme', 'dark');
    }
  };

  return (
    <button
      className="bg-gray-300 rounded-full p-2 flex items-center justify-center focus:outline-none"
      type="button"
      aria-label="toggle-switch"
      onClick={clickHandler}
    >
      {currentTheme === 'dark' ? (
        <LightBulbIcon className="h-5 w-5" />
      ) : (
        <LightBulbIconDark className="h-5 w-5" />
      )}
    </button>
  );
};

export default ToggleSwitch;
