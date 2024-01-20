import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Ingame from "./Pages/Ingame";
import Page404 from "./Pages/Page404";
import GameStart from "./components/Modals/GameStart";
import Loading from "./components/Loading";
import Omok from "./components/Omok";

function App() {
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
