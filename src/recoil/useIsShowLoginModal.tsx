import { useRecoilState, atom } from "recoil";

export const isShowLoginModal = atom({
  key: "IsShowLoginModal",
  default: false,
});

function useIsShowLoginModal() {
  const [show, setShow] = useRecoilState(isShowLoginModal);

  return {
    show,
    setShow,
  };
}

export default useIsShowLoginModal;
