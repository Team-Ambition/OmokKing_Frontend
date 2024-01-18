import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Ingame from "./Pages/Ingame";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/InGame/:id" element={<Ingame />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
