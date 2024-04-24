import { useEffect, useState } from "react";
import { useRecoilState, atom } from "recoil";



export const userInfoState = atom({
  key: "useMade",
  default: 1 as any,
});

function useMade() {
    // const [page, setPage] = useState<any>(3);
  const [page, setPage] = useRecoilState(userInfoState);
  

//   useEffect(() => {
//     setLogin(!!(userInfo && userInfo?.email));
//   }, [userInfo, userInfo?.email]);

  return {
    setPage,
    page
  };
}

export default useMade;
