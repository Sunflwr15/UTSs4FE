import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Button from "../component/button";
import Container from "../component/container";
import { BiHomeSmile, BiExit } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";

function Home() {
  const navLink =
    "bg-white w-full py-3 px-3 rounded-xl font-medium text-gray-500 flex flex-row justify-between items-center capitalize transition-all ease-in-out";
  const activeNavLink =
    "bg-white w-full py-3 px-3 rounded-xl font-bold flex flex-row justify-between items-center capitalize transition-all ease-in-out";
  const link = [
    "dashboard",
    "data siswa",
    "data petugas",
    "data kelas",
    "data spp",
    "history pembayaran",
  ];
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  return (
    <section className="h-full grid grid-cols-5 gap-2 grid-rows-2">
      <div className="grid grid-rows-3 row-span-2 gap-2 col-span-1">
        <div
          className={
            "row-span-3 w-full h-full flex flex-col justify-between p-5"
          }
        >
          <div className="flex flex-col space-y-3 ">
            <div className="flex flex-col w-full h-fit" color="bg-[#f8f9fa]">
              {/* <p className="text-xl font-bold">Selamat Datang!</p> */}
              <div className="flex flex-col -space-y-1">
                <p className="text-lg font-bold">Username</p>
                <p className="text-sm font-medium text-stone-600">Role</p>
              </div>
            </div>
            {link.map((items, index) => {
              console.log(items.replace("%20", "-"));
              const item = items.replace(" ", "-");
              return (
                  <NavLink
                    className={path === item ? activeNavLink : navLink}
                    to={item}
                  >
                    <p>{items}</p>
                    <MdSpaceDashboard className="text-lg"></MdSpaceDashboard>
                  </NavLink>
              );
            })}
            {/* <NavLink
              className={path === "dashboard" ? activeNavLink : navLink}
              to="dashboard"
            >
              <p>Dashboard</p>
              <MdSpaceDashboard className="text-lg"></MdSpaceDashboard>
            </NavLink>
            <NavLink className={navLink} to="data-siswa">
              <p>Dashboard</p>
              <MdSpaceDashboard className="text-lg"></MdSpaceDashboard>
            </NavLink> */}
          </div>
          <div className="flex flex-col space-y-5">
            <Button 
              title={
                <NavLink to="/" className="flex flex-row space-x-2 items-center justify-center">
                  <BiExit className="rotate-180 text-lg font-bold"></BiExit>
                  <p>Keluar</p>
                </NavLink>
              }
              className={
                "w-full bg-gray-400 text-gray-500 hover:text-white hover:bg-red-500"
              }
            ></Button>
          </div>
        </div>
      </div>
      <Container color={"bg-[#f8f9fa]"} className="row-span-2 col-span-4">
        <Outlet />
      </Container>
    </section>
  );
}

export default Home;

