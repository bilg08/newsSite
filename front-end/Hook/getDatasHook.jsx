import axios from "axios";
import { useEffect,useState } from "react";
import { useLoadingContext } from "../context";

export const useGetDatasHook = () => {
  let [datas, setDatas] = useState();
  const { setIsLoading } = useLoadingContext();
  
  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:8000/users");
      setDatas(data.data.users);

      setIsLoading(false);
    } catch (error) {}
  };
  
  useEffect(() => {
    getData();
    return () => getData();
  }, []);
  return datas;
};
