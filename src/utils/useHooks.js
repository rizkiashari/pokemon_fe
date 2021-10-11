import { useState, useEffect } from "react";
import { API } from "../config/API";

export const useHook = (url) => {
  const [isLoadingData, seIstLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get(url);

      if (res.data.status === "failed") {
        return console.log("Error: ", res.data.message);
      } else {
        const data = res.data;
        setData(data);
      }
    };
    fetchData();
  }, [url, isLoadingData]);

  const loadingData = () => {
    seIstLoadingData(!isLoadingData);
  };

  return { data, loadingData };
};
