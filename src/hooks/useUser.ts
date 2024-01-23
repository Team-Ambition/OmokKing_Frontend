import { useEffect, useState } from "react";
import customAxios from "../lib/customAxios";

const useUser = () => {
  const [isLoggined, setIsLoggined] = useState<boolean>(false);
  const [data, setData] = useState({ name: "", profileImg: "" });
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customAxios.get("/auth/userInfo");
        const userData = {
          name: response.data.name,
          profileImg: response.data.profileImg,
        };
        setData(userData);
        if (userData.name && userData.profileImg) {
          setIsLoggined(!!accessToken);
        } else {
          localStorage.removeItem("accessToken");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [accessToken]);

  return {
    isLoggined,
    data,
  };
};

export default useUser;
