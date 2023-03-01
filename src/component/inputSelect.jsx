import React from "react";
import reactSelect from "react-select";
// import Select from "react-select/dist/declarations/src/Select";

export default function InputSelect({ children, isError,...props }) {
  return (
    <div className="mt-3 space-y-2 ">
      <label htmlFor="">Masuk Sebagai</label>
      <div
        className={
          isError
            ? "border-2 border-red-500 p-3 rounded-md bg-red-50 shadow-sm ring-0 outline-0"
            : "border-2 p-3 rounded-md bg-stone-50 shadow-sm ring-0 outline-0"
        }
      >
        <select
          {...props}
          className="w-full bg-transparent outline-none"
          // id={"role"}
        >
          {/* {children} */}
          <option value="">Select an option</option>
          <option value="siswa">Siswa</option>
          <option value="petugas">Petugas</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}

// export default function InputSelect({
//   label,
//   isError,
//   textError,
//   children,
//   ...props
// }) {
//   return (
//     <div className="mt-5 space-y-2 ">
//       <label htmlFor={label}>Masuk sebagai</label>
//       <div className=" p-3 w-full bg-stone-50 border-2 rounded-md  shadow-sm">
//         <select
//           {...props}
//           className="w-full bg-transparent outline-none"
//           id={label}
//         >
//           {children}
//         </select>
//       </div>
//       {isError && <p className="error">{textError}</p>}
//     </div>
//   );
// }
