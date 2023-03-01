import React, { Children } from "react";
import { BsSearch } from "react-icons/bs";
import Button from "../../../component/button";
import InputText from "../../../component/input";
import InputSelect from "../../../component/inputSelect";

function DataSiswa() {
  return (
    <div>
      <Table></Table>
    </div>
  );
}

export default DataSiswa;

function Table() {
  const tableList = [
    {
      tanggal: "08-12-2022",
      petugas: "Pak Budi",
      siswa: "Mamat",
      nominal: "Rp. 60.000",
    },
  ];
  //   console.log(tableList);
  //   console.log(tableList[0].tanggal);
  return (
    <div className="w-full col-span-3 row-span-4 py-5 space-y-3">
      <div className="grid grid-cols-3 gap-2 items-center">
        <p className="text-xl font-medium">Data Siswa</p>
        <div className="grid grid-cols-3 gap-2 col-span-2">
          <div className=" p-3 w-full bg-stone-50 border-2 rounded-md  shadow-sm">
            <select className="w-full bg-transparent outline-none">
              <option>Kelas</option>
              <option>Kelas</option>
              <option>Kelas</option>
            </select>
          </div>
          <InputText placeholder={"Cari Siswa"}></InputText>
          {/* <Button title={"Tambah Siswa"} color={"bg-[#39a845]"}></Button> */}
          <Modal title={"Tambah Siswa"}>
            <div></div>
          </Modal>
        </div>
      </div>
      <div class="relative overflow-x-auto  rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-white bg-[#061a40]">
            <tr>
              <th scope="col" className="px-6 py-4">
                Nama Siswa
              </th>
              <th scope="col" className="px-6 py-4">
                NISN
              </th>
              <th scope="col" className="px-6 py-4">
                NIS
              </th>
              <th scope="col" className="px-6 py-4">
                Kelas
              </th>
              <th scope="col" className="px-6 py-4">
                Alamat
              </th>
              <th scope="col" className="px-6 py-4">
                No. Telp
              </th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((items, index) => {
              // console.log(items)
              return (
                <tr className="bg-[#dae3e5] border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {items.petugas}
                  </th>
                  <td className="px-6 py-4">{items.tanggal}</td>
                  <td className="px-6 py-4">{items.siswa}</td>
                  <td className="px-6 py-4">{items.nominal}</td>
                  <td className="px-6 py-4">{items.nominal}</td>
                  <td className="px-6 py-4">{items.nominal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Modal({ children, title }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#36AE7C] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {title}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
