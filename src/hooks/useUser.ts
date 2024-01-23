import { useEffect, useState } from "react";
import customAxios from "../lib/customAxios";

const useUser = () => {
  const [isLoggined, setIsLoggined] = useState<boolean>(false);
  const accessToken = localStorage.getItem("accessToken");
  const data = { name: "", profileImg: "" };

  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      try {
        await customAxios.get("/auth/userInfo").then((res) => {
          data.name = res.data.name;
          data.profileImg = res.data.profileImg;
        });
        if (data.name && data.profileImg) {
          setIsLoggined(!!accessToken);
        } else {
          localStorage.removeItem("accessToken");
        }
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return {
    isLoggined,
    data,
  };
};

export default useUser;
