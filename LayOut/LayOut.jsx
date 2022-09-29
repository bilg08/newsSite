import { Header, SideBar } from "../components";
import css from "./layOut.module.css"
function LayOut({children}) {
    return (
      <div className={css.container}>
        <div className={css.mainContainer}>
          <Header />
          {children}

          <SideBar/>
        </div>
      </div>
    );
}
export default LayOut