import type { OrderDTO } from "../models/order";

export function save(cart : OrderDTO){
    const str = JSON.stringify(cart);

    localStorage.setItem("com.devsuperior/Cart", str)
}

export function get() : OrderDTO{
    const str = localStorage.getItem("com.devsuperior/Cart") || '{"items": []}';
    return JSON.parse(str);
}