import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

	if (fetching) {

	}

	if (!data?.me) {		
		body = (
				<>
				<NextLink href={"/login"}>
					<Link color={"white"} mr={3}>
						Login{" "}
					</Link>
				</NextLink>
				<NextLink href={"/register"}>
					<Link color={"white"}>Register</Link>
				</NextLink>
			</>
		);
	}

	else {
		body = (
			<Flex direction="row" width="100%">
				<Box mr={25} color={'white'}>Olá {data.me.username}</Box>
				<NextLink  href={"/player"}>
					<Link mr={6} color={"white"}>Player</Link>
				</NextLink>
				<NextLink href={"/update"}>
					<Link mr={6} color={"white"}>Edit Player</Link>
				</NextLink>
				<Button alignSelf={'end'} variant="link">Logout</Button>
			</Flex>

		)
	}

  return (
    <Box bg="steelblue" p={5}>
		{body}
    </Box>
  );
};

export default NavBar;
