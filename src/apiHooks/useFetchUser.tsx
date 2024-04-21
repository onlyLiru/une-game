import { useState } from "react";
import { getUserInfo } from "@/services/user";
import useUsreInfo from "@/recoil/useUserInfo";

export const useFetchUser = () => {
  const { userInfo, setInfo } = useUsreInfo();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setErr(false);
      setLoading(true);
      const { data } = await getUserInfo();
      // 20230806update: 兼容web2登陆，有邮箱也认为是登陆成功
      if (!data.email) throw Error("user data fetching error");
      setInfo(data);
      setLoading(false);
    } catch (error) {
      console.log("🚀 ~ file: user.ts ~ line 33 ~ fetchUser ~ error", error);
      setErr(true);
      setLoading(false);
    }
  };

  return { err, loading, fetchUser };
};
