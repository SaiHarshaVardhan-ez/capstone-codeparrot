// App.js

import React from "react";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./screens/DashBoard";
import Selection from "./screens/Selection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/selection" element={<Selection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
