import { useSideBarContext } from "../../context/showSideBar"
import { Shadow } from "../shadow";
import css from "./sideBar.module.css";
export const SideBar = () => {
    const { handleSideBar, isSideBarOpen } = useSideBarContext();
    const navBarItems = [
      { name: "Products" },
      { name: "Services" },
      { name: "Contact" },
      { name: "Login in" },
      { name: "Blogs", where: "blogPage" },
      { name: "Get Access" },
    ];
    return (
      <>
            <Shadow />
            <div style={{
                display: isSideBarOpen === true ? "block" : 'none'
            }} className={css.SideBar}>
                {navBarItems.map((navbaritem) => {
                    return (
                        <ul className={css.navBarItemsContainer}>
                            <li>{navbaritem.name }</li>
                        </ul>
                    )
                })}
            </div>
      </>
    );
}