import { createContext, useState ,useContext} from 'react';
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themes = {
    darkTheme: {
      background: "black",
      color: "#47B5FF",
    },
    lightTheme: {
      body: "transparent",
      color: "black",
    },
  };
  function handleTheme() {
    setIsDarkTheme(prevVal => !prevVal);
  }

  return (
    <ThemeContext.Provider value={{ handleTheme, isDarkTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => useContext(ThemeContext);
