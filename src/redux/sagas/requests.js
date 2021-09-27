import axios from "axios";

export function axiosGet() {
  return axios.request({
    method: "GET",
    url: "https://my-json-server.typicode.com/Joshuafrankle/demo/user",
  });
}
