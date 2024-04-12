import { stringify } from "querystring";
import request from "./request";

export const get = ({ url, data = {} }: { url: string; data: any }) => {
  return request(url + `?${stringify(data)}`, { method: "GET" });
};
export const post = ({ url, data = {} }: { url: string; data: any }) => {
  return request(url, { method: "POST", body: data });
};
