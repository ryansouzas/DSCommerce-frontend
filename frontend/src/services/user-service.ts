import { requestBackend } from "../utils/requests";
import * as authservice from "./auth-service";

export function findMe(){

    const headers ={
        Authorization: `Bearer ${authservice.getAccessToken()}`
    };

  return requestBackend({
    url: `/users/me`,
    headers
  });
}