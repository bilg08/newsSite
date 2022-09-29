import { createContext, useContext, useState } from "react";
import { useGetDatasHook } from "../Hook/getDatasHook";

const NewsDatasContext = createContext();

export const NewsDatasContextProvider = ({ children }) => {
  const newsDatas = useGetDatasHook([]);
  const [userInterestedBlog,setUserInterestedBlog] = useState("")
  
  return (
    <NewsDatasContext.Provider
      value={{
        newsDatas,
        setUserInterestedBlog,
        userInterestedBlog
      }}
    >
      {children}
    </NewsDatasContext.Provider>
  );
};
export const useNewsDatasContext = () => useContext(NewsDatasContext);
