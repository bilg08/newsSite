import axios from "axios";
import { useEffect,useState } from "react";
import { useLoadingContext } from "../context";

export const useGetDatasHook = () => {
  let [datas, setDatas] = useState();
  const { setIsLoading } = useLoadingContext();
  const getData = async () => {
    try {
        const data = await axios.get("https://dummyapi.io/data/v1/post", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "app-id": "63350d37b3ea369104cba468",
          },
        })
      setDatas(data.data.data);
      setIsLoading(false)
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return datas;
};