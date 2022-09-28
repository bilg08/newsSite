import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

export const SideBarContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  function handleSideBar() {
    setIsSideBarOpen(prev => !prev);
    console.log(isSideBarOpen)
  }
    return (
      <SideBarContext.Provider
        value={{ isSideBarOpen, setIsSideBarOpen, handleSideBar }}>
        {children}
      </SideBarContext.Provider>
    );
}
export const useSideBarContext = () => useContext(SideBarContext);