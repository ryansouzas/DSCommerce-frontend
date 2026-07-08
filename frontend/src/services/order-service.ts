import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";

export function findByIdRequest(id: number) {

    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `${BASE_URL}/orders/${id}`,
        withCredentials: true
    };

    return requestBackend(config);

}