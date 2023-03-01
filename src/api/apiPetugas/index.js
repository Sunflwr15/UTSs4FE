import axios from "../baseUrl";

export async function getPetugas() {
  return axios.get(`/getlistSiswa`);
}

export async function createPetugas(payload) {
  console.log("payload =>", payload);

  const formData = new FormData();

  formData.append("nisn", payload.nisn);
  formData.append("nis", payload.nis);
  formData.append("nama", payload.nama);
  formData.append("id_kelas", payload.id_kelas);
  formData.append("alamat", payload.alamat);
  formData.append("no_telp", payload.no_telp);
  formData.append("id_spp", payload.id_spp);

  return axios.post(`/getlistSiswa`);
}

export async function DeletePetugas(id) {
  return axios.delete(`/deleteSiswa/${id}`);
}
