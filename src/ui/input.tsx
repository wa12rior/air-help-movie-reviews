import {
  Box,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Stack,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { FC } from "react";

export const Input: FC<ChakraInputProps> = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      maxWidth={"720px"}
      position={"relative"}
    >
      <Box position={"absolute"} left={2}>
        <Search width={16} height={16} />
      </Box>
      <ChakraInput {...props} pl={8} />
    </Stack>
  );
};
