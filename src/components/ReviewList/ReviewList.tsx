"use client";

import { Review } from "@/types/api/reviews";
import { List, ListItem, Stack, Text } from "@chakra-ui/react";
import ReviewView from "../ReviewView/ReviewView";

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <Stack direction="column" padding={4} maxWidth={"50vw"}>
      <Text py="2" fontSize="3xl" fontWeight="bold">
        Reviews
      </Text>
      <List>
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <ReviewView review={review} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ReviewList;
