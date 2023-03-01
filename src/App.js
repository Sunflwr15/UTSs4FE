import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomeSiswa, HomeAdmin, HomePetugas, Login } from "./pages/index";
import Dashboard from "./pages/outlet_pages/admin/dashboard";
import DataSiswa from "./pages/outlet_pages/admin/dataSiswa";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.login);

  return (
    <React.Fragment>
      <div className="w-screen h-screen p-2 bg-white rounded-xl">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              auth.role === "siswa" ? (
                <HomeSiswa />
              ) : null || auth.role === "admin" ? (
                <HomeAdmin />
              ) : null || auth.role === "petugas" ? (
                <HomePetugas />
              ) : null
            }
          >
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="data-siswa" element={<DataSiswa />}></Route>
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
