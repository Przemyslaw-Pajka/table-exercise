import { myFile } from "./myFile";
import axios from "axios";

const getData = async () => {
  return axios({
    method: "get",
    url: myFile,
    responseType: "json",
  }).then(({ data }) => {
    return data;
  });
};

export default getData;
