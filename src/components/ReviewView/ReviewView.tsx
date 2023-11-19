import { Review } from "@/types/api/reviews";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

interface ReviewViewProps {
  review: Review;
}

const ReviewView = ({ review }: ReviewViewProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{review.headline.main}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Publication date
              </Heading>
              <Text pt="2" fontSize="sm">
                {review.pub_date}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Abstract
              </Heading>
              <Text pt="2" fontSize="sm">
                {review.abstract}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Divider py={2} />
    </>
  );
};

export default ReviewView;
