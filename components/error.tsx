import React, { useState } from 'react';
import cn from 'classnames';

type ErrorProps = {
  message?: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  const [completed, setCompleted] = useState(false);
  const [animationState, setAnimationState] = useState<'enter' | 'exit'>(
    'enter'
  );

  return (
    !completed && (
      <div
        className={cn(
          'absolute bottom-8 right-8 p-4 bg-red-500 rounded-md text-sm text-gray-200 shadow-xl dark:bg-red-700 dark:text-gray-200',
          animationState === 'enter'
            ? 'animate-slide-up md:animate-slide-in'
            : 'animate-slide-down md:animate-slide-out'
        )}
        onAnimationEnd={() => {
          if (animationState === 'enter') {
            setTimeout(() => {
              setAnimationState('exit');
            }, 2000);
          }

          if (animationState === 'exit') {
            setCompleted(true);
          }
        }}
      >
        <div>{message ?? 'Error occurred while fetching data'}</div>
        <div>Please refresh the page after sometime</div>
      </div>
    )
  );
};

export default Error;
