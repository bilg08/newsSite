import css from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useWindowWidth } from "../../Hook";
import { useSideBarContext } from "../../context/showSideBar";
import { useThemeProvider } from "../../theme/themeProvider";

export const Header = () => {
  const windowWidth = useWindowWidth();
  const { handleSideBar } = useSideBarContext();  const navBarItems = [
    { name: "Products", where: "blogPage" },
    { name: "Services", where: "blogPage" },
    { name: "Contact", where: "blogPage" },
    { name: "Login in", where: "blogPage" },
    { name: "Blogs", where: "blogPage" },
    { name: "Get Access", where: "blogPage" },
  ];
    return (
      <div className={css.Header}>
        <a className={css.headerLogo}>
          team.
        </a>
        <div
          style={{ display: windowWidth.width <= 1200 ? "none" : "flex" }}
          className={css.headerNavBarContainer}
        >
          <ul className={css.headerNavBar}>
            {navBarItems.map((navBarItem, index) => {
              return (
                <a
                  key={navBarItem + index}
                  style={{ color: "#6D7D8B" }}
                  href="#"
                >
                  <li onClick={() => router.push(navBarItem.where)}>
                    {navBarItem.name}{" "}
                  </li>
                </a>
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
