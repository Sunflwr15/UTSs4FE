import { Field, useFormik } from "formik";
import React from "react";
import Button from "../component/button";
import InputText from "../component/input";
import InputSelect from "../component/inputSelect";

function Login() {
  const formik = useFormik({
    initialValues: {
      nis: "",
      name: "",
      role: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              type={"number"}
              value={formik.values.nis}
              handleChange={formik.handleChange}
            ></InputText>
            <InputText
              placeholder={"Masukan nama"}
              label="Nama"
              id={"name"}
              name={"name"}
              type={"name"}
              value={formik.values.name}
              handleChange={formik.handleChange}
            ></InputText>
            <InputSelect
              name="role"
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            ></InputSelect>
          </div>
          <section className="flex flex-row justify-between items-center w-full">
            <div className="space-x-2 flex flex-row">
              <input type="checkbox" />
              <p className="text-md">Remember me</p>
            </div>
            <div>
              <p className="text-md underline">Forgot password?</p>
            </div>
          </section>
          <Button textColor={"white"} title={"Submit"} type={"submit"}></Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
