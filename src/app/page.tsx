"use client";

import ReviewList from "@/components/ReviewList/ReviewList";
import ReviewSearch from "@/components/Search/ReviewSearch";
import { fetchData } from "@/lib/api/reviews";
import { Review } from "@/types/api/reviews";
import { Divider, Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  const triggerFetch = async () => {
    const { data } = await fetchData(query);

    setError(data.error);
    if (data.response?.docs) {
      setReviews(data.response?.docs);
    }
  };

  useEffect(() => {
    triggerFetch();
  }, [query]);

  return (
    <Stack as="main" padding={4}>
      <ReviewSearch />
      <Divider />
      {!error && <ReviewList reviews={reviews} />}
      {error && <Text color={"red"}>Server error. Try again later.</Text>}
    </Stack>
  );
}
