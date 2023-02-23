import { useFormik } from "formik";
import React from "react";

const InputText = ({
  id,
  handleChange,
  value,
  type,
  name,
  label,
  placeholder,
}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  return (
    <div className="space-y-2 flex flex-col mt-5">
      <label htmlFor="email" className="">
        {label}
      </label>
      <input
        className="border-2 p-3 rounded-md bg-stone-50 shadow-sm"
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
