import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import InputField from "../components/inputField";

const Player: React.FC<any> = ({ player }) => {
  const hp: number = (player.currentHealth / player.maxHealth) * 100;
  const me = {
    id: 2,
  };
  const [health, setHealth] = useState(0);

  let healthPercentage: number = (health / 100) * 100;
  let ownsPlayer = true// me.id === player.id;

  healthPercentage = 100 * Math.random()

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
        <Image boxSize="200px" src={player.imgUrl} />
      </Box>
      <Box mb="2rem" alignItems="">
        <Text fontSize={"3xl"}>{player.name.toString()}</Text>
      </Box>
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
            initialValues={{}}
            onSubmit={(values) => {
              console.log("heal");
              //const response = await register({username: values.username, password: values.password})
            }}
          >
            {({ values, handleChange, isSubmitting }) => (
              <Stack direction="row" spacing="5" justifyContent="flex-start">
                <Box alignContent="center" minWidth="15rem">
                  <Text>Vida</Text>
                  <Progress
                    hasStripe
                    height="32px"
                    colorScheme="red"
                    value={health}
                  />
                </Box>
                <Box maxW="4rem">
                  <Button onClick={() => setHealth(health + 10)}
                    type="button"
                    disabled={healthPercentage === 100 || !ownsPlayer}
                    colorScheme="green"
                    isLoading={isSubmitting}
                  >
                    Heal
                  </Button>
                  <InputField name="heal" placeholder="heal" label="" />
                </Box>
              </Stack>
            )}
          </Formik>
        </Box>
      </Stack>
    </Box>
  );
};

export default Player;
