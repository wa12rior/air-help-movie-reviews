import { Input } from "@/ui/input";
import { Box, Button, Stack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import QueryHistory from "../QueryHistory/QueryHistory";

const ReviewSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query") ?? undefined;
  const [search, setSearch] = useState(query);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?query=${search}`);
  };

  return (
    <form method="GET" onSubmit={handleSubmit}>
      <Stack padding={4} direction="row">
        <Box>
          <Input
            name="query"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <QueryHistory />
        </Box>
        <Button type="submit">Search</Button>
      </Stack>
    </form>
  );
};

export default ReviewSearch;
