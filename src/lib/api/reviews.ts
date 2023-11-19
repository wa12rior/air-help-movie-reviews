import { ReviewResponse } from "@/types/api/reviews";

export const fetchData = async (query: string | null) => {
  const search = query ? new URLSearchParams({ query }) : "";
  const endpointUrl = "/api/search";

  return (
    await fetch(`${endpointUrl}?${search}`)
  ).json() as Promise<ReviewResponse>;
};
