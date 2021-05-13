import { Box, Container, Text, Flex } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layoyut"
import NavBar from "../components/navbar"

const Index = () => {

  return <>
    <Layout>
    <Box h={"max"} backgroundColor="gray.900">
      <Flex direction={"column"} justifyContent={"center"} alignItems={"left"}w={'600px'} h={'400px'} p={25}>
        <Text mb={20} color="white" fontSize={"5xl"}>Tatu Bola RPG Tool</Text>
        <Text color="white" alignSelf="left" fontSize="2x1">by Miguel Sanseverino</Text>
        </Flex>
    </Box>
    </Layout>   
  </>
}

export default Index