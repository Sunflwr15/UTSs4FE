import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomeSiswa, HomeAdmin, HomePetugas, Login } from "./pages/index";

function App() {
  return (
    <React.Fragment>
      <div className="w-screen h-screen p-2 bg-white rounded-xl">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<HomeAdmin />}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
