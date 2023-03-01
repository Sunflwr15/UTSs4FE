import Cookies from "js-cookie";
import { loginPetugas, loginSiswa } from "../../api/apiAuth";

export function authLoginSiswa(payload) {
  return async (dispatch) => {
    try {
      let response = await loginSiswa(payload);
      console.log(response);
      let data = response.data;
      console.log(data)
      dispatch({
        type: "login",
        nama: data?.response.nama,
        nis: data?.response.nis,
        role: "siswa",
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
export function authLoginPetugas(payload) {
  return async (dispatch) => {
    try {
      let response = await loginPetugas(payload);
      console.log(response);
      let data = response.data;
      console.log(data)
      dispatch({
        type: "login",
        nama: data?.response.nama_petugas,
        nis: data?.response.nis,
        role: data?.response.level,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.response.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function authMe(payload) {
  return async (dispatch) => {
    try {
      let response = await loginSiswa();
      let data = response.data;
      dispatch({
        type: "login",
        name: data.user.name,
        email: data.user.email,
        isAuth: true,
      });
      Cookies.set("myapps_token", data?.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
