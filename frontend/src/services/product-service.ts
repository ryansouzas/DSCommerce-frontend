import axios, { type AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findPageRequest(size = 12, page: number, sort = "name", name: string){

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