import css from "../styles/header.module.css";

export const Header = () => {
    const navBarItems = [
      { name: "Products" },
      { name: "Services" },
      { name: "Contact" },
      { name: "Login in" },
      { name: "Get Access" },
    ];
    return (
      <div className={css.Header}>
        <a href="#" className={css.headerLogo}>
          team.
        </a>
        <div className={css.headerNavBarContainer}>
          <ul className={css.headerNavBar}>
            {navBarItems.map((navBarItem) => {
              return (
                <a key={navBarItem} style={{color: "#6D7D8B"}} href="#">
                  <li>{navBarItem.name} </li>
                </a>
              );
            })}
          </ul>
          <button id={css.HeaderGetAccessButton}>Get Access</button>
        </div>
      </div>
    );
}
