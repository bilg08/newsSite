import css from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useWindowWidth } from "../../Hook";
import { useSideBarContext } from "../../context/showSideBar";
import { useRouter } from "next/router";
import { useThemeContext } from "../../theme/themeProvider";
import sunIcon from '../../asset/sunIcon.png';
import moonIcon from "../../asset/moonIcon.png";
import Image from 'next/image'
export const Header = () => {
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const { handleTheme, isDarkTheme, themes } = useThemeContext();
  const { handleSideBar } = useSideBarContext();  const navBarItems = [
    { name: "Login in", where: "blogPage" },
    { name: "Blogs", where: "blogPage" },
  ];
    return (
      <div className={css.Header}>
        <p className={css.headerLogo}>team.</p>
        <div
          style={{ display: windowWidth.width <= 1200 ? "none" : "flex" }}
          className={css.headerNavBarContainer}>
          <div className={css.toggleThemeBulbContainer}>
            <Image width={`17px`} height={`17px`} src={moonIcon} />
            <Image width={`17px`} height={`17px`} src={sunIcon} />
            <button
              className={
                isDarkTheme === true
                  ? css.toggleThemeBulbInDarkTheme
                  : css.toggleThemeBulbInLightTheme
              }
              // className={css.toggleThemeBulbInLightTheme}
              onClick={handleTheme}></button>
          </div>
          <ul className={css.headerNavBar}>
            {navBarItems.map((navBarItem, index) => {
              return (
                <li
                  key={(navBarItem+index)}
                  onClick={() => router.push(navBarItem.where)}
                >
                  {navBarItem.name}
                </li>
              );
            })}
          </ul>
          <button id={css.HeaderGetAccessButton}>Get Access</button>
        </div>
        <AiOutlineMenu
          onClick={() => handleSideBar()}
          style={{
            display: windowWidth.width <= 1200 ? "block" : "none",
            fontSize: "23px",
          }}
        />
      </div>
    );
}
