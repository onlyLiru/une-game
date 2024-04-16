import { useToast } from "@chakra-ui/react";
import { jwtHelper } from "@/utils/jwt";
import useUsreInfo from "@/recoil/useUserInfo";

const { setToken, setEmail } = jwtHelper;

function useLogout() {
  const toast = useToast();
  const { userInfo, setInfo } = useUsreInfo();

  // 创建一个 Date 对象，表示过去的时间（当前时间减去一秒）
  var pastDate = new Date();
  pastDate.setTime(pastDate.getTime() - 1000); // 减去一秒

  // 清除登陆数据
  const clearLoginData = () => {
    setToken("", {
      expires: new Date(pastDate),
    });
    setEmail("", {
      expires: new Date(pastDate),
    });
    setInfo({} as any);

    toast({
      status: "success",
      title: "You have been logged out successfully.",
      variant: "subtle",
    });
  };

  return {
    clearLoginData,
  };
}

export default useLogout;
