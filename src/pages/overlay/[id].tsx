import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Overlay from "../../components/overlay";



const OverlayPage: React.FC<any> = ({props}) => {
  const router = useRouter();
  const pid: number = Number(router.query.id as string);
  const [count, setCount] = useState(0);
  const [playerData, setPlayerData] = useState()

	return (
    <Box backgroundColor="transparent">
      <Overlay id={pid as number}/>
    </Box>
	)

};

export default OverlayPage;
