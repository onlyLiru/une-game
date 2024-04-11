import useSWR from "swr";
import { post as fetcher } from "@/utils/fetcher";

export function useUser(id: string | number) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, (url: string) =>
    fetcher({ url, params: { name: "li" } })
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
