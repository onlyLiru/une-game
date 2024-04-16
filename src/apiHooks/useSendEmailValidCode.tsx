import useSWR from "swr";
import { post } from "@/utils/fetcher";
import { sendEmailValidCode } from "@/api";

export function useSendEmailValidCode(email: string) {
  const fetchFun = useSWR<any, any, any>(sendEmailValidCode, (url: string) =>
    post({ url, data: { email } })
  );

  return {
    fetchFun: () => fetchFun,
  };
}
