import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Ingame from "./Pages/Ingame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/InGame/:id" element={<Ingame />} />
    </Routes>
  );
}

export default App;
