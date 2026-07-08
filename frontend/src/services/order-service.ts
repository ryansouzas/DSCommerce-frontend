import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";
import type { OrderDTO } from "../models/order";

export function findByIdRequest(id: number) {

    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `${BASE_URL}/orders/${id}`,
        withCredentials: true
    };

    return requestBackend(config);

}

export function placeOrderRequest(cart: OrderDTO) {

    const config: AxiosRequestConfig = {
        method: 'POST',
        url: `${BASE_URL}/orders`,
        data: cart,
        withCredentials: true
    };

    return requestBackend(config);
}