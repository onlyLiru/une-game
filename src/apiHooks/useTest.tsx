import useSWR from "swr";
import { get as fetcher } from "@/utils/fetcher";
import { testUrl } from "@/api";

export function useTest() {
  const { data, error, isLoading } = useSWR(testUrl, (url: string) =>
    fetcher({ url, data: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
