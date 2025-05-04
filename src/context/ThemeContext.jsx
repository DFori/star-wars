import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isSith, setIsSith] = useState(false);

  const toggleTheme = () => {
    setIsSith(!isSith);
  };

  return (
    <ThemeContext.Provider value={{ isSith, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);