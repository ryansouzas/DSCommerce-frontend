import axios, { type AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findPageRequest(page: number, name: string, size = 12, sort = "name"){

  const config : AxiosRequestConfig = {
    baseURL: BASE_URL,
    url: "/products",
    method: "GET",
    params: {
      size: size,
      page: page,
      sort: sort,
      name: name
    }
  }

  return axios(config);
}

export function findById(id: number){
  return axios.get(`${BASE_URL}/products/${id}`);
}