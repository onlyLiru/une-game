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
  const isLogin = !!(userInfo && (userInfo as any)?.email);

  return {
    userInfo,
    setInfo,
    isLogin,
  };
}

export default useUsreInfo;
