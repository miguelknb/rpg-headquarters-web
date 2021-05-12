import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layoyut";
import { useUserQuery } from "../../generated/graphql";
import Bar from "../../components/bar";
import { selectPlayerImage } from "../../utils/selectPlayerImg";
import { useSubscription } from "urql";
import Overlay from "../../components/overlay";



const OverlayPage: React.FC<any> = ({}) => {
  const router = useRouter();
  const pid: number = Number(router.query.id as string);
  const [count, setCount] = useState(0);
  const [playerData, setPlayerData] = useState()


	return (
    <Overlay id={pid}/>
	)

};

export default OverlayPage;
