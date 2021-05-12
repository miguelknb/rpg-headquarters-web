import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserQuery } from "../generated/graphql";
import { selectPlayerImage } from "../utils/selectPlayerImg";
import Bar from "./bar";
import { useSubscription } from "urql";

const statusChange = `
subscription {
	StatusChange{
    username
    id
    maxHealth
    currentHealth
    maxSanity
    currentSanity
    isInsane
    imgUrl_sane_normal
    imgUrl_sane_hurt
    imgUrl_sane_dying
    imgUrl_insane_normal
    imgUrl_insane_hurt
    imgUrl_insane_dying
    imgUrl_dead
  }
}

`;

const handleSubscription = (user, response) => {
  return response;
};

const Overlay: React.FC<any> = ({ id }) => {

  let player;

  let [{ data, fetching, error }] = useUserQuery({ variables: { id: id } });

  const [res] = useSubscription({ query: statusChange }, handleSubscription);

  console.log('res', res)

  if (fetching) return <p>Loading...</p>;

  if (error) return `Error ${error}`;

  if(res.data) {
    player= res.data.StatusChange
  }
  else {

    player = data.user;
  }
  return (
    <Flex direction={"column"} alignItems={"center"} p={4} m={"auto"}>
      <Text p={5} fontSize="3xl">
        {player.username}'s overlay page
      </Text>
      <Box p={10} background={"transparent"}>
        <Box p={10} borderColor="black" border="5px">
          <Bar
            current={player.currentHealth}
            max={player.maxHealth}
            width={"14rem"}
            height={"4rem"}
            displayValue={false}
            color={"red"}
          />
          <Flex>
            <Text mt={5} fontSize={"2xl"} color={"black"}>
              {player.currentHealth}/{player.maxHealth}
            </Text>
            <Text mt={5} fontSize={"2xl"} color={"white"}>
              {player.currentHealth}/{player.maxHealth}
            </Text>
          </Flex>
        </Box>
        <Box p={10} borderColor="black" border="5px" alignItems={"center"}>
          <Bar
            current={player.currentSanity}
            max={player.maxSanity}
            width={"14rem"}
            height={"4rem"}
            displayValue={false}
            color={"#5b1d8a"}
          />
          <Text mt={5} fontSize={"2xl"} color={"black"}>
            {player.currentSanity}/{player.maxSanity}
          </Text>
        </Box>
        <Box size="sm" alignItems="center">
          <Image boxSize="320px" src={selectPlayerImage(player)} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Overlay;
