import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {InputNumberField} from "../components/inputField";
import Bar from "./bar";
import { selectPlayerImage } from "../utils/selectPlayerImg";
import { useDamageMutation, useDamageSanityMutation, useHealMutation, useHealSanityMutation } from "../generated/graphql";

const Player: React.FC<any> = ({ player }) => {

  const [sanity, setSanity] = useState(player.currentSanity);
  const [health, setHealth] = useState(player.currentHealth);
  const [inputType, setInputType] = useState('');
  const [, heal] = useHealMutation();
  const [, damage] = useDamageMutation();
  const [, healSanity] = useHealSanityMutation()
  const [, damageSanity] = useDamageSanityMutation();

  let healthPercentage: number = (health / player.maxHealth) * 100;
  let sanityPercentage: number = (sanity / player.maxSanity) * 100;

  return (
    <Box
      border="5px"
      borderColor="gray"
      mt={8}
      mx="auto"
      maxW="500px"
      w="100%"
      maxH="700px"
      alignItems="center"
      backgroundColor="transparent"
    >
      <Box size="sm" alignItems="center">
        <Image boxSize="320px" src={selectPlayerImage(player)} />
      </Box>
      {/* <Box mb="2rem" alignItems="">
        <Text fontSize={"3xl"}>{player.name.toString()}</Text>
      </Box> */}
      <HStack spacing={10} direction="row">
        <Checkbox size="lg" colorScheme="red">
          Insano
        </Checkbox>
        {/* <Checkbox size="lg" colorScheme="green" defaultIsChecked>
                Checkbox
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
                Checkbox
            </Checkbox> */}
      </HStack>
      <Stack mt="2rem">
        <Box mt="1rem">
          <Formik
            initialValues={{type: "", value: 0}}
            onSubmit={ async (values) => {

              let response;

              const inputvalue =  Number(values.value);
              if( inputType === 'heal') {
                response = await heal({id: player.id, healHealth: inputvalue});
                if (response.data) setHealth(response.data.heal.currentHealth);
              }
              if ( inputType === 'damage') {
                response = await damage({id: player.id, dmgHealth: inputvalue});
                if (response.data) setHealth(response.data.damage.currentHealth);
              }
              
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form>
              <Stack direction="row" spacing="5" alignItems={'center'} justifyContent="flex-start">
                <Flex direction="row" alignContent="center" minWidth="15rem">
                  <Text mr={3} fontSize="2xl">HP</Text>
                  <Bar current={health} max={player.maxHealth} width={'14rem'} height={'4rem'} displayValue={true} color={"red"}/>
                </Flex>
                <Box maxW="10rem" alignContent="center">
                  <Button
                    onClick={() => setInputType('heal')}
                    type='submit'
                    disabled={healthPercentage >= 100}
                    colorScheme="green"
                    isLoading={isSubmitting}
                    width={'100px'}
                  >
                    Heal
                  </Button>
                  <InputNumberField name="value" placeholder="" label="" />
                  <Button mt={2} 
                    onClick={() => setInputType('damage')}
                    type='submit'
                    disabled={healthPercentage <= 0}
                    colorScheme="red"
                    isLoading={isSubmitting}
                    width={'100px'}
                  >
                    Damage
                  </Button>

                </Box>
              </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
      <Stack mt="2rem">
        <Box mt="1rem">
          <Formik
            initialValues={{type: "", value: 0}}
            onSubmit={ async (values) => {

              let response;

              const inputvalue =  Number(values.value);
              if( inputType === 'heal') {
                response = await healSanity({id: player.id, healSanity: inputvalue});
                if (response.data) setSanity(response.data.healSanity.currentSanity);
              }
              if ( inputType === 'damage') {
                response = await damageSanity({id: player.id, dmgSanity: inputvalue});
                if (response.data) setSanity(response.data.damageSanity.currentSanity);
              }
              
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form>
              <Stack direction="row" spacing="5" alignItems={'center'} justifyContent="flex-start">
                <Flex direction="row" alignContent="center" minWidth="15rem">
                  <Text mr={3} fontSize="2xl">SN</Text>
                  <Bar current={sanity} max={player.maxSanity} width={'14rem'} height={'4rem'} displayValue={true} color={"#5b1d8a"}/>
                </Flex>
                <Box maxW="10rem" alignContent="center">
                  <Button
                    onClick={() => setInputType('heal')}
                    type='submit'
                    disabled={sanityPercentage >= 100}
                    colorScheme="purple"
                    isLoading={isSubmitting}
                    width={'100px'}
                  >
                    Heal
                  </Button>
                  <InputNumberField name="value" placeholder="" label="" />
                  <Button mt={2} 
                    onClick={() => setInputType('damage')}
                    type='submit'
                    disabled={sanityPercentage <= 0}
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    width={'100px'}
                  >
                    Damage
                  </Button>

                </Box>
              </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Box>
  );
};

export default Player;
