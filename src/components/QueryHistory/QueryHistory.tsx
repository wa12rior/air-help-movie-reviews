"use client";

import { useQueryHistoryStore } from "@/app/store/HistoryStore";
import { Box, Stack, Text } from "@chakra-ui/react";
import { History } from "lucide-react";
import { useRouter } from "next/navigation";

interface QueryHistoryProps {
  active?: boolean;
}

const QueryHistory = ({ active = false }: QueryHistoryProps) => {
  const router = useRouter();
  const queryHistory = useQueryHistoryStore((state) => state.history);
  const removeHistory = useQueryHistoryStore((state) => state.removeHistory);

  return (
    queryHistory.length > 0 &&
    active && (
      <Box p={2} bg={"#f9f9f9"}>
        <Stack direction="column" spacing={2}>
          {queryHistory.slice(0, 4).map((historyItem, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              my={4}
              flex={"1 1 100%"}
            >
              <History />
              <Text
                flex={"1 1 100%"}
                pl={2}
                pr={4}
                onClick={() => {
                  router.push(`/?query=${historyItem.query}`);
                }}
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                {historyItem.query}
              </Text>
              {/* <Box
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => {
                  removeHistory(historyItem.query);
                }}
              >
                <Trash />
              </Box> */}
            </Stack>
          ))}
        </Stack>
      </Box>
    )
  );
};

export default QueryHistory;
