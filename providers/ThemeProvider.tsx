import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<'light' | 'dark'>>] | undefined
>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
