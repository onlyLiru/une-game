import request from "@/utils/request";
import { jwtHelper } from "@/utils/jwt";
import {
  sendEmailValidCode,
  emailLoginApiPath,
  userInfoApiPath,
  saveScore,
  getBoard,
} from "@/api";

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
  const token = jwtHelper.getToken();
  if (!token) return Promise.resolve();
  return request(userInfoApiPath);
}

export function saveUserScore(score: number) {
  return request(saveScore, {
    method: "POST",
    body: { score },
  });
}
export function getBoardData() {
  return request(getBoard, {
    method: "GET",
  });
}
