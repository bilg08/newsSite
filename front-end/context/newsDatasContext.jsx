import { createContext, useContext, useState } from "react";
import { useGetDatasHook } from "../Hook/getDatasHook";
import axios from "axios";

const NewsDatasContext = createContext();

export const NewsDatasContextProvider = ({ children }) => {
  const newsDatas = useGetDatasHook([]);
  const instance = axios.create({
    baseURL: `http://localhost:8000/users`,
    timeout: 1000,
    ContentType: `application/json`,
  });
  const [userInterestedBlog,setUserInterestedBlog] = useState("")
  
  return (
    <NewsDatasContext.Provider
      value={{
        newsDatas,
        setUserInterestedBlog,
        userInterestedBlog,
      }}
    >
      {children}
    </NewsDatasContext.Provider>
  );
};
export const useNewsDatasContext = () => useContext(NewsDatasContext);
