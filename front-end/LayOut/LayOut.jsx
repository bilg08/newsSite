import { Header, SideBar } from "../components";
import { Footer } from "../components/footer/footer";
import { Spinner } from "../components/spinner/spinner";
import { useThemeContext } from "../theme/themeProvider";
import css from "./layOut.module.css"
function LayOut({ children }) {
  const { isDarkTheme, themes } = useThemeContext();
    return (
      <div style={isDarkTheme === true ? themes.darkTheme : themes.lightTheme} className={css.container}>
        <div className={css.mainContainer}>
          <Header />
          {children}
          <SideBar />
          <Spinner/>
          <Footer />
        </div>
      </div>
    );
}
export default LayOut