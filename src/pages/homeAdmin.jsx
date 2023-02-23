import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../component/button";
import Container from "../component/container";
import { BiHomeSmile, BiExit } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";

function Home() {
  const navLink =
    "bg-white w-full p-3 rounded-xl font-medium flex flex-row justify-between items-center capitalize";
  const link = [
    "dashboard",
    "data siswa",
    "data petugas",
    "data kelas",
    "data spp",
    "history pembayaran",
  ];
  return (
    <section className="h-full grid grid-cols-5 gap-2 grid-rows-2">
      <div className="grid grid-rows-3 row-span-2 gap-2 col-span-1">
        <div
          className={
            "row-span-3 w-full h-full flex flex-col justify-between p-5 pt-10"
          }
        >
          <div className="flex flex-col space-y-3 ">
            {/* {link.map((items, index) => {
              return (
                <NavLink className={navLink}>
                  <p>{items}</p>
                  <MdSpaceDashboard className="text-lg"></MdSpaceDashboard>
                </NavLink>
              );
            })} */}
            <NavLink className={navLink}>
              <p>Dashboard</p>
              <MdSpaceDashboard className="text-lg"></MdSpaceDashboard>
            </NavLink>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col -space-y-1">
              <p className="text-lg font-medium">Username</p>
              <p className="text-sm text-stone-600">Role</p>
            </div>
            <Button
              title={
                <div className="flex flex-row space-x-2 items-center justify-center">
                  <BiExit className="rotate-180 text-lg font-bold"></BiExit>
                  <p>Keluar</p>
                </div>
              }
              className={
                "w-full bg-gray-300 text-gray-500 hover:text-white hover:bg-red-500"
              }
            ></Button>
          </div>
        </div>
      </div>
      <Container color={"bg-[#f8f9fa]"} className="row-span-2 col-span-4">
        {Outlet}
      </Container>
    </section>
  );
}

export default Home;
