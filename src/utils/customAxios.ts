import axios from "axios";

const baseUrl = process.env["API_URL"] || "http://localhost:5000/api";

function axiosGet(route: string, param = "") {
  return axios.get(`${baseUrl}/${route}/${param && param}`).then((res) => {
    return res.data;
  });
}

function axiosPost(route: string, payload: any, param = "") {
  return axios
    .post(`${baseUrl}/${route}/${param && param}`, payload)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

function axiosPut(route: string, payload: any, param?: string) {
  return axios
    .put(`${baseUrl}/${route}/${param && param}`, payload)
    .then((res) => {
      return res.data;
    });
}

function axiosDelete(route: string, param: string) {
  return axios.delete(`${baseUrl}/${route}/${param}`).then((res) => {
    return res.data;
  });
}

export { axiosGet, axiosPost, axiosPut, axiosDelete };
