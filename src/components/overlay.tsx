import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserQuery } from "../generated/graphql";
import { selectPlayerImage } from "../utils/selectPlayerImg";
import Bar from "./bar";
import { useSubscription } from "urql";

// document.body.style.backgroundColor = "transparent";

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

interface OverlayPros {
  id: number;
}

const handleSubscription = (user, response) => {
  return response;
};

const Overlay: React.FC<OverlayPros> = ({ id }) => {

  let startedFetching = false;

  let player;

  let [{ data, fetching, error }] = useUserQuery({ variables: { id: id } });

  const [res] = useSubscription({ query: statusChange }, handleSubscription);

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>
    Error {error};
  </p> 

  if(res.data) {
    startedFetching = true;
    player= res.data.StatusChange
    console.log(player)
  }
  else {
    if(!startedFetching) player = data.user;
  }

  return (
    <Flex direction={"column"} alignItems={"center"} p={4} m={"auto"} backgroundColor={"transparent"}>
      <Text p={5} fontSize="3xl">
        {player.username}'s overlay page
      </Text>
      <Box p={10} backgroundColor={"transparent"}>
        <Box p={10} borderColor="black" border="5px">
          <Bar
            current={player.currentHealth}
            max={player.maxHealth}
            width={"14rem"}
            height={"4rem"}
            displayValue={false}
            color={"red"}
            bgColor={"darkred"}
          />
          <Flex>
            <Text mt={5} mr={5} fontSize={"2xl"} color={"black"}>
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
            bgColor={"#1a002b"}
          />
          <Flex>
          <Text mt={5} mr={5} fontSize={"2xl"} color={"black"}>
            {player.currentSanity}/{player.maxSanity}
          </Text>
          <Text mt={5} mr={5} fontSize={"2xl"} color={"white"}>
            {player.currentSanity}/{player.maxSanity}
          </Text>
          </Flex>
        </Box>
        <Box size="sm" alignItems="center">
          <Image boxSize="320px" src={selectPlayerImage(player)} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Overlay;
