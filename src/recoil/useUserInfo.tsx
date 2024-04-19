import { useRecoilState, atom } from "recoil";

export interface InterfaceUserInfo {
  auth_status?: number;
  bio?: string;
  contract_address?: string;
  created_at?: number;
  discord_name?: string;
  email?: string;
  instagram_link?: string;
  integral_num: number;
  is_central: boolean;
  is_init: boolean;
  is_new_user: boolean;
  is_nft_avatar: boolean;
  login_email: string;
  profile_banner?: string;
  profile_image: string;
  site_link?: string;
  source: number;
  twitter_link?: string;
  twitter_name?: string;
  username: string;
  wallet_address?: string;
}

export const userInfoState = atom({
  key: "UserInfo",
  default: {} as InterfaceUserInfo,
});

function useUsreInfo() {
  const [userInfo, setInfo] = useRecoilState(userInfoState);
  const isLogin = !!(userInfo && (userInfo as any)?.login_email);

  return {
    userInfo,
    setInfo,
    isLogin,
  };
}

export default useUsreInfo;
