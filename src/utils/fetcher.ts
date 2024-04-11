import axios from "axios";

export const get = ({ url, data }: { url: string; data: any }) => {
  return axios.get(url, { data: data }).then((res) => res.data);
};
export const post = ({ url, params }: { url: string; params: any }) => {
  return axios.get(url, { params }).then((res) => res.data);
};
