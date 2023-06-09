import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <>
      <Head>
        <title>Nick Foden</title>
        <meta name="description" content="Push those walls back 🤘😎🤘" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isHome ? (
        <Box display="flex" margin="16px 0">
          <Box margin="0 auto">
            <Heading textAlign="center">Nick Foden</Heading>
            <Text align="center">Push those walls back 🤘😎🤘</Text>
          </Box>
        </Box>
      ) : null}

      <nav style={{ display: "flex" }}>
        <Box margin="0 auto">
          <Link
            href="/"
            color="blue.400"
            _hover={{ color: "blue.500" }}
            margin="0 16px"
          >
            Home
          </Link>
          <Link
            href="/about"
            color="blue.400"
            margin="0 16px"
            _hover={{ color: "blue.500" }}
          >
            About
          </Link>
          <Link
            href="/explore-js"
            color="blue.400"
            margin="0 16px"
            _hover={{ color: "blue.500" }}
          >
            Explore JS
          </Link>
        </Box>
      </nav>
    </>
  );
};

export default Header;
