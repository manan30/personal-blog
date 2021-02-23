import React, { useState } from 'react';
import MoonIcon from '../public/images/svg/moon.svg';
import SunIcon from '../public/images/svg/sun.svg';
import styles from '../styles/ToggleSwitch.module.css';

// const ToggleSwitchButton = styled.button`
/* border: 0.5px solid
    ${(props) =>
      props.toggled
        ? `var(--toggle-border-color-${props.themePreference})`
        : `var(--initial-toggle-border-color)`};
  background-color: ${(props) =>
    props.toggled
      ? `rgb(var(--background-color-${props.themePreference}))`
      : `rgb(var(--initial-background-color))`};
  transform: translateX(
    ${(props) =>
      props.toggled
        ? `var(--toggle-switch-transform-${props.themePreference})`
        : `var(--initial-toggle-switch-transform)`}
  );

  @media screen and (max-width: 815px) {
    height: 1.7rem;
    width: 1.7rem;

    transform: translateX(
      ${(props) =>
        props.toggled
          ? `var(--toggle-switch-transform-${props.themePreference})`
          : `var(--initial-toggle-switch-transform)`}
    );
  } */
// `;

const ToggleSwitch = () => {
  // const { themeState, themeDispatch } = useTheme();
  const [colorMode, setColorMode] = useState('');

  // useEffect(() => {
  //   if (!themeState.toggled) {
  //     const mode = document.documentElement.style.getPropertyValue(
  //       '--color-mode'
  //     );
  //     setColorMode(mode);
  //   } else {
  //     setColorMode(themeState.themePreference);
  //   }
  // }, [themeState]);

  const clickHandler = () => {
    // if (themeState.themePreference && themeState.themePreference === 'light')
    //   themeDispatch({ type: 'toggle-dark-theme' });
    // else if (
    //   themeState.themePreference &&
    //   themeState.themePreference === 'dark'
    // )
    //   themeDispatch({ type: 'toggle-light-theme' });
    // else if (colorMode === 'dark')
    //   themeDispatch({ type: 'toggle-light-theme' });
    // else themeDispatch({ type: 'toggle-dark-theme' });
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={[
        styles.container,
        colorMode === 'dark' ? styles.dark : styles.light
      ].join(' ')}
    >
      {colorMode === 'dark' && <SunIcon className={styles.svgLight} />}
      <button
        className={[
          styles.button,
          colorMode === 'dark' ? styles.dark : styles.light
        ].join(' ')}
        type="button"
        aria-label="toggle-switch"
        onClick={clickHandler}
        // themePreference={themeState.themePreference}
        // toggled={themeState.toggled}
      />
      {colorMode !== 'dark' && <MoonIcon className={styles.svgDark} />}
    </div>
  );
};

export default ToggleSwitch;
