import React, { useState } from 'react';
import { LightBulbIcon as LightBulbIconDark } from '@heroicons/react/solid';
import { LightBulbIcon } from '@heroicons/react/outline';

const ToggleSwitch = () => {
  const [colorMode, setColorMode] = useState('');

  const clickHandler = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="bg-gray-300 rounded-full p-2 flex items-center justify-center"
      type="button"
      aria-label="toggle-switch"
      onClick={clickHandler}
    >
      {colorMode === 'dark' ? (
        <LightBulbIcon className="h-5 w-5" />
      ) : (
        <LightBulbIconDark className="h-5 w-5" />
      )}
    </button>
  );
};

export default ToggleSwitch;
