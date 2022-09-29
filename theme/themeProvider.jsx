import { createContext, useState ,useContext} from 'react';
const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme,setTheme] = useState(true)
  const toggleTheme = () => {
    if (theme === true) {
      setTheme("Dark");
    } else if (theme === false) {
      setTheme("Light");
    }
  };
  

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeProvider = () => useContext(ThemeContext);
