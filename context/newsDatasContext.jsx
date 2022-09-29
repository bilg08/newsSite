import { createContext, useContext, useState } from "react";

const NewsDatasContext = createContext();

export const NewsDatasContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  function handleSideBar() {
    setIsSideBarOpen((prev) => !prev);
    console.log(isSideBarOpen);
  }
  return (
    <NewsDatasContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, handleSideBar }}
    >
      {children}
    </NewsDatasContext.Provider>
  );
};
export const useNewsDatasContext = () => useContext(NewsDatasContext);
