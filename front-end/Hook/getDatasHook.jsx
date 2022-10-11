import axios from "axios";
import { useEffect,useState } from "react";
import { useLoadingContext } from "../context";

export const useGetDatasHook = () => {
  let [datas, setDatas] = useState();
  const { setIsLoading } = useLoadingContext();


  const instance = axios.create({
    baseURL: `http://localhost:8000/users`,
    timeout: 1000,
    ContentType:`application/json`
  });


  instance.interceptors.request.use(
    function (config) {
      setIsLoading(true);
      return config;
    },
    function (error) {
      alert("Do something with request error");
      return Promise.reject(error);
    }
  );

  
  const getData = async () => {
    
    try {
      const data = await instance.get();
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
