import React from "react";
import { useNavigate } from "react-router";
import { loginPetugas, loginSiswa } from "../api/apiAuth";
import Button from "../component/button";
import InputText from "../component/input";
import InputSelect from "../component/inputSelect";
import * as Yup from "yup";
import { Formik, Form, Field, useFormik } from "formik";
import { authLoginPetugas, authLoginSiswa } from "../redux/action/authAction";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    nis: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    nama: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    role: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      nis: "",
      nama: "",
      role: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        // console.log(JSON.stringify(values, null, 2));
        if (values.role === "siswa") {
          const response = await dispatch(authLoginSiswa(values));
          console.log(response);
          // alert(response.data.msg);
          if (response.status === "success") {
            navigate("/home");
          }
        } else if (values.role === "admin" || values.role === "petugas") {
          const response = await dispatch(authLoginPetugas(values));
          console.log(response);
          // alert(response.data.msg);
          if (response.status === "success") {
            navigate("/home");
          }
        }
      } catch (error) {
        if (error.response.status === 422) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
      // console.log(values);
    },
  });
  return (
    <div className="grid grid-cols-6 gap-2 h-full w-full">
      <div className="bg-[url('https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg')] bg-cover w-full  col-span-3 rounded-3xl ">
        <div className="bg-main  bg-opacity-80 w-full h-full col-span-3 rounded-3xl flex justify-center items-center">
          <p className="text-center uppercase text-white text-3xl font-bold w-1/2">
            Pembayaran Spp Berbasis Website
          </p>
        </div>
      </div>

      <div className="col-span-3 px-28 py-5 grid">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 flex-col flex justify-center w-full"
        >
          <div>
            <p className="text-2xl">Welcome back 🙌</p>
            <p className="text-md text-stone-400">
              Login with an existing account!
            </p>
          </div>
          <div>
            <InputText
              placeholder={"Masukan NIS"}
              label="NIS"
              id={"nis"}
              name={"nis"}
              // type={"number"}
              isError={formik.errors.nis}
              value={formik.values.nis}
              handleChange={formik.handleChange}
            >
              <label htmlFor="email" className="pb-2 mt-3">
                NIS/Password
              </label>
            </InputText>
            {/* {formik.errors.nis ? <div>{formik.errors.nis}</div> : null} */}

            <InputText
              placeholder={"Masukan nama"}
              label="Nama"
              id={"nama"}
              name={"nama"}
              isError={formik.errors.nama}
              type={"name"}
              value={formik.values.nama}
              handleChange={formik.handleChange}
            >
              <label htmlFor="email" className="pb-2 mt-3">
                Nama
              </label>
            </InputText>
            {/* {formik.errors.nama ? <div>{formik.errors.nama}</div> : null} */}

            <InputSelect
              name="role"
              isError={formik.errors.role}
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            ></InputSelect>
            {/* {formik.errors.role ? <div>{formik.errors.role}</div> : null} */}
          </div>

          <Button color={"bg-main"} title={"Submit"} type={"submit"}></Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
