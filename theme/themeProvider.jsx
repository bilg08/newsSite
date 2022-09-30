import { createContext, useState ,useContext} from 'react';
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themes = {
    darkTheme: {
      background: "black",
      color: "#08D9D6",
    },
    lightTheme: {
      body: "transparent",
      color: "#000",
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
