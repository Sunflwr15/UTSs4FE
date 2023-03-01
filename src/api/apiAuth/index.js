import axios from "../baseUrl";

function loginSiswa(payload) {
  return axios.post(`/login-siswa`, payload);

}

function loginPetugas(payload) {
  return axios.post(`/login-petugas`, payload);

}

export {loginSiswa, loginPetugas}
