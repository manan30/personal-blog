import React, { useContext, useEffect, useState } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemePreference = 'light' | 'dark';

const getInitialColorMode = (): ThemePreference => {
  const persistedColorPreference = window.localStorage.getItem(
    'manan-joshi-blog-theme'
  );
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference as ThemePreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
};

const ThemeContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<ThemePreference>>] | undefined
>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemePreference>('light');

  useEffect(() => {
    const userSetPreference = getInitialColorMode();
    setCurrentTheme(userSetPreference);
  }, []);

  useEffect(() => {
    console.log({ currentTheme });
    window.localStorage.setItem('manan-joshi-blog-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
