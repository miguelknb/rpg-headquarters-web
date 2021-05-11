import React, { useState } from "react";
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

const Player: React.FC<any> = ({ player }) => {
  const [health, setHealth] = useState(player.currentHealth);
  const [inputType, setInputType] = useState('');
  
  let healthPercentage: number = (health / player.maxHealth) * 100;
  
  console.log('batata', player)

  let currentImageUrl;

  return (
    <Box
      border="5px"
      borderColor="gray"
      mt={8}
      mx="auto"
      maxW="500px"
      w="100%"
      maxH="700px"
      alignContent="center"
      backgroundColor="transparent"
    >
      <Box size="sm">
        <Image boxSize="200px" src={selectPlayerImage(player)} />
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
              let finalHealth = health;
              let response;
              if( inputType === 'heal') {
                finalHealth += Number(values.value);
              }
              if ( inputType === 'damage') {
                finalHealth -= Number(values.value); 
              }
              setHealth(finalHealth);
              //const response = await register({username: values.username, password: values.password})
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Form>
              <Stack direction="row" spacing="5" justifyContent="flex-start">
                <Flex direction="row" alignContent="center" minWidth="15rem">
                  <Text mr={3} fontSize="2xl">HP</Text>
                  <Bar current={health} max={player.maxHealth} width={'14rem'} height={'4rem'} displayValue={true}/>
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
    </Box>
  );
};

export default Player;
