import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Overlay from "../../components/overlay";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: transparent;
  }
`


const OverlayPage: React.FC<any> = ({props}) => {

  const router = useRouter();
  const pid: number = Number(router.query.id as string);

  
	return (
    <Box backgroundColor="transparent">
      <GlobalStyle/>
      <Overlay id={pid as number}/>
    </Box>
	)

};

export default OverlayPage;
