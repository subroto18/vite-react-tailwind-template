import axios from "axios";
export default () => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let Api = axios.create({
    baseURL: "https://api.example.com",
    withCredentials: true,
  });

  return Api;
};
