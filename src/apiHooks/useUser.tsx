import useSWR from "swr";
import { post as fetcher } from "@/utils/fetcher";

export function useUser(id: string | number) {
  const { data, error, isLoading } = useSWR(
    "/api/market/v1/homepage/quality",
    (url: string) => fetcher({ url, data: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
