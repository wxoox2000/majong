import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './clobalStyles';
import { Playground } from './playground/playground';
import { StartScreen } from './StartScreen/StartScreen';
import { Settings } from './Settings/Settings';
import { Wrap } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const savedTheme = localStorage.getItem('Theme');
  const [bg, setBg] = useState(savedTheme ? savedTheme : 'lake');
  const [changeBg, setchangeBg] = useState(false);
  const BgColor = theme => {
    if (theme === bg) {
      return;
    }
    setchangeBg(true);
    setTimeout(() => {
      localStorage.setItem('Theme', theme);
      setBg(theme);
      setchangeBg(false);
    }, 500);
  };
  return (
    <Wrap $bgtheme={bg} className={changeBg ? 'change' : null}>
      <Routes>
        <Route path="/" element={<StartScreen />}>
          <Route path="settings" element={<Settings bg={BgColor} />} />
        </Route>
        <Route path="/game" element={<Playground />} />
      </Routes>
      <GlobalStyles />
    </Wrap>
  );
};
