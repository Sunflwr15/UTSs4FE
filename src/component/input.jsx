import { useFormik } from "formik";
import React from "react";

const InputText = ({
  id,
  handleChange,
  value,
  type,
  name,
  isError,
  placeholder,
  children,
}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <div className="flex flex-col">
      {children}
      <input
        className={
          isError
            ? "border-2 border-red-500 p-3 rounded-md bg-red-50 shadow-sm ring-0 outline-0"
            : "border-2 p-3 rounded-md bg-stone-50 shadow-sm ring-0 outline-0"
        }
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default InputText;
