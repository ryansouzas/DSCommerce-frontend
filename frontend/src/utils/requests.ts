import type { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import axios from "axios";
import * as authservice from "../services/auth-service";

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.withCredentials 
    ? {
        ...config.headers,
        Authorization: "Bearer " + authservice.getAccessToken(),
    
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });

}