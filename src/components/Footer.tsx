import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/next-js";

const Footer = () => (
  <Box backgroundColor="black" display="flex">
    <Box margin="0 auto" minH={50} display="flex" alignItems={"center"}>
      <Text textAlign="center" color="gray">
        Nick Foden is pretty into burritos
      </Text>
      <Box width={8} />
      <Link color="gray" href="github.com">
        Github
      </Link>
    </Box>
  </Box>
);

export default Footer;
