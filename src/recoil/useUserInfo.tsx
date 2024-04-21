import { useEffect, useState } from "react";
import { useRecoilState, atom } from "recoil";

export interface InterfaceUserInfo {
  avatar: string;
  email: string;
  nick_name: string;
  score: number;
}

export const userInfoState = atom({
  key: "UserInfo",
  default: {} as InterfaceUserInfo,
});

function useUsreInfo() {
  const [userInfo, setInfo] = useRecoilState(userInfoState);
  const [isLogin, setLogin] = useState(!!(userInfo && userInfo?.email));

  useEffect(() => {
    setLogin(!!(userInfo && userInfo?.email));
  }, [userInfo, userInfo?.email]);

  return {
    userInfo,
    setInfo,
    isLogin,
  };
}

export default useUsreInfo;
