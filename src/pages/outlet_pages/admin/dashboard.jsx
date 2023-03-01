import React from "react";
import Container from "../../../component/container";
import { BsPersonFill } from "react-icons/bs";
function Dashboard() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 w-full h-full">
      {/* <p className="col-span-3 text-2xl font-medium">Dashboard</p> */}
      <Container
        className="w-full h-full text-white flex-col flex justify-between"
        color={"bg-[#376996]"}
      >
        <BsPersonFill className="text-4xl" />
        <div>
          <p className="text-2xl font-medium">Jumlah Siswa Aktif</p>
          <p className="text-2xl font-normal">100</p>
        </div>
      </Container>
      <Container
        className="w-full h-full text-white flex-col flex justify-between"
        color={"bg-[#1f487e]"}
      >
        <BsPersonFill className="text-4xl" />
        <div>
          <p className="text-2xl font-medium">Jumlah Petugas</p>
          <p className="text-2xl font-normal">100</p>
        </div>
      </Container>
      <Container
        className="w-full h-full text-white flex-col flex justify-between"
        color={"bg-[#1d3461]"}
      >
        <BsPersonFill className="text-4xl" />
        <div>
          <p className="text-2xl font-medium">Jumlah Kelas</p>
          <p className="text-2xl font-normal">4</p>
        </div>
      </Container>
      <Table />
    </div>
  );
}

export default Dashboard;

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
      <p className="text-xl font-medium">History Pembayaran</p>
      <div class="relative overflow-x-auto  rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-white bg-[#061a40]">
            <tr>
              <th scope="col" className="px-6 py-4">
                Nama Petugas
              </th>
              <th scope="col" className="px-6 py-4">
                Tanggal Pembayaran
              </th>
              <th scope="col" className="px-6 py-4">
                Nama Siswa
              </th>
              <th scope="col" className="px-6 py-4">
                Nominal Pembayaran
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
                </tr>
              );
            })}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
