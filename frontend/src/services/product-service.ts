import { type AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findPageRequest(page: number, name: string, size = 12, sort = "name"){

  const config : AxiosRequestConfig = {
    url: "/products",
    method: "GET",
    params: {
      size: size,
      page: page,
      sort: sort,
      name: name
    }
  }

  return requestBackend(config);
}

export function findById(id: number){
  return requestBackend({
    url: `/products/${id}`,
    method: "GET"
  });
}

export function deleteById(id: number){
  return requestBackend({
    url: `/products/${id}`,
    method: "DELETE",
    withCredentials: true
  });
}