import axios from "axios";

export const get = ({ url, data }: { url: string; data: any }) => {
  return axios.get(url, { params: data }).then((res) => res.data);
};
export const post = ({ url, data }: { url: string; data: any }) => {
  return axios.post(url, data).then((res) => res.data);
};
