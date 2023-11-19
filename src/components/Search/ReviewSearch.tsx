import { useQueryHistoryStore } from "@/app/store/HistoryStore";
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
  const [historyOpen, setHistoryOpen] = useState(false);
  const addEntry = useQueryHistoryStore((state) => state.addHistory);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?query=${search}`);
    if (search) {
      addEntry({ query: search });
    }
  };

  return (
    <form method="GET" onSubmit={handleSubmit}>
      <Stack padding={4} direction="row">
        <Box>
          <Input
            name="query"
            value={search}
            onFocus={() => {
              setHistoryOpen(true);
            }}
            onBlur={() => {
              setHistoryOpen(false);
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <QueryHistory active={historyOpen} />
        </Box>
        <Button type="submit">Search</Button>
      </Stack>
    </form>
  );
};

export default ReviewSearch;
