import request from "@/utils/request";
import { sendEmailValidCode, emailLoginApiPath, userInfoApiPath } from "@/api";

export function getEmailValidCode(email: string) {
  return request(sendEmailValidCode, {
    method: "POST",
    body: { email },
  });
}

export function loginWithEmailSerices(data: { email: string; code: number }) {
  return request(emailLoginApiPath, {
    method: "PUT",
    body: data,
  });
}

export function getUserInfo() {
  return request(userInfoApiPath);
}
