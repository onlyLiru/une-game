import useSWR from "swr";
import { get, post } from "@/utils/fetcher";
import { testUrl, testPostUrl } from "@/api";

export function useTest() {
  const { data, error, isLoading } = useSWR(testUrl, (url: string) =>
    get({ url, data: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export function useTestPost() {
  const { data, error, isLoading } = useSWR(testPostUrl, (url: string) =>
    get({ url, data: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
