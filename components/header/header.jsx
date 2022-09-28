import css from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useWindowWidth } from "../../Hook";
import { useSideBarContext } from "../../context/showSideBar";
import { useRouter } from "next/router";

export const Header = () => {
  const windowWidth = useWindowWidth();
  const { handleSideBar } = useSideBarContext();
  const router = useRouter();
  const navBarItems = [
    { name: "Products" },
    { name: "Services" },
    { name: "Contact" },
    { name: "Login in" },
    { name: "Blogs",where:'blogPage'},
    { name: "Get Access" },
  ];
    return (
      <div className={css.Header}>
        <a href="#" className={css.headerLogo}>
          team.
        </a>
        <div
          style={{ display: windowWidth.width <= 1090 ? "none" : "flex" }}
          className={css.headerNavBarContainer}>
          <ul className={css.headerNavBar}>
            {navBarItems.map((navBarItem) => {
              return (
                <a key={navBarItem} style={{ color: "#6D7D8B" }} href="#">
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
            display: windowWidth.width <= 1090 ? "block" : "none",
            fontSize: "23px",
          }}
        />
      </div>
    );
}
