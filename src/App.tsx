import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./Pages/Main";
import Ingame from "./Pages/Ingame";
import Page404 from "./Pages/Page404";
import Omok from "./components/Omok";
import useUser from "./hooks/useUser";
import { io } from "socket.io-client";

function App() {
  const { isLoggined } = useUser();
  useEffect(() => {
    if (isLoggined) {
      console.log(isLoggined);
      const socket = io("http://localhost:3000");
    }
  }, [isLoggined]);

  const history = useNavigate();
  useEffect(() => {
    const urlParams = new URL(window.location.href).searchParams.get(
      "accessToken"
    );
    if (urlParams) {
      localStorage.setItem("accessToken", urlParams);
      history("/");
      window.location.reload();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/InGame/:id" element={<Ingame />} />
      <Route path="/omok" element={<Omok />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
