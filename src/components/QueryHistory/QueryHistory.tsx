"use client";

import { Box, Stack, Text } from "@chakra-ui/react";

const QueryHistory = () => {
  const searchHistory = [];
  return (
    searchHistory.length > 0 && (
      <Box mt={4}>
        <Text fontWeight="bold">Search History:</Text>
        <Stack direction="row" spacing={2}>
          {searchHistory.map((historyItem, index) => (
            <Text
              key={index}
              //   onClick={() => handleHistoryClick(historyItem)}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              {historyItem}
            </Text>
          ))}
        </Stack>
      </Box>
    )
  );
};

export default QueryHistory;
