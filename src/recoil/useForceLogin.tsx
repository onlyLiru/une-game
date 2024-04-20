import { useRecoilState, atom } from "recoil";

interface IState {
  showLoginModal: boolean;
  noClose: boolean;
  link: string | undefined;
}

export const forceLogin = atom({
  key: "IsShowLoginModal",
  default: {
    showLoginModal: false,
    noClose: false,
    link: undefined,
  } as IState,
});

function useForceLogin() {
  const [forceLoginState, setForceLoginState] = useRecoilState(forceLogin);

  return {
    forceLoginState,
    setForceLoginState,
  };
}

export default useForceLogin;
