import request from "@/utils/request";
import { testUrl } from "@/api";

export function getTest() {
  return request(testUrl, {
    method: "get",
  });
}
