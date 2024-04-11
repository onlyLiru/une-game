import useSWR from "swr";
import { get as fetcher } from "@/utils/fetcher";

export function useTest() {
  const { data, error, isLoading } = useSWR(
    "/api/integral/v1/prize/all/info",
    (url: string) => fetcher({ url, data: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
