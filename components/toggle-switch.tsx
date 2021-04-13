import React from 'react';
import { LightBulbIcon as LightBulbIconDark } from '@heroicons/react/solid';
import { LightBulbIcon } from '@heroicons/react/outline';
import { useTheme } from '../providers/ThemeProvider';

const ToggleSwitch = () => {
  const [currentTheme, setCurrentTheme] = useTheme();

  const clickHandler = () => {
    if (currentTheme === 'dark') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
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
