import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {


  const [{ data, fetching }] = useMeQuery();
  const [{fetching: logoutFetching}, logout] = useLogoutMutation()

  const router = useRouter();

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
				<Button 
				onClick={ () => {
					logout();
					router.push('/login')
				}}
				isLoading={logoutFetching}
				alignSelf={'end'} variant="link">Logout</Button>
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
