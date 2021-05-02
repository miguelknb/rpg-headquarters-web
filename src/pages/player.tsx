import { Box, Button, Checkbox, HStack, Image, Progress, Stack, Text } from '@chakra-ui/react'
import { Formik } from 'formik'
import React from 'react'

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 20,
    currentHealth: 10,
    imgUrl: "https://i.pinimg.com/originals/c9/b1/35/c9b13507663ed4c9234386cee9762ba9.jpg"
}



const Player : React.FC<any> = ({}) => {

    const hp : number = (mockCharacter.currentHealth/mockCharacter.maxHealth) * 100

    return (
        <Box mt={8} mx="auto" maxW="350px" w="100%" maxH="700px" alignContent="center">
            <Box size="sm">
                <Image
                    boxSize="300px"
                    src={mockCharacter.imgUrl}
                />
            </Box>
            <Box mb="2rem" alignItems="">
                <Text fontSize={"3xl"}>{mockCharacter.name.toString()}</Text>
            </Box>
            <HStack spacing={10} direction="row">
            <Checkbox size="lg" colorScheme="red">
                Insano
            </Checkbox>
            <Checkbox size="lg" colorScheme="green" defaultIsChecked>
                Checkbox
            </Checkbox>
            <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
                Checkbox
            </Checkbox>
            </HStack>
            <Stack mt="2rem">
                <Box alignContent="center">
                    <Text>Vida</Text>
                    <Progress height="32px" colorScheme="red" value={hp}/>
                </Box>
                <Box alignContent="center">
                    <Text>Sanidade</Text>
                    <Progress height="32px" colorScheme="purple" value={hp}/>
                </Box>
                <Formik
                	initialValues={{}}
                    onSubmit={ (values) => {
                        console.log('heal')
                        //const response = await register({username: values.username, password: values.password})
                    }}>
                    {({values, handleChange, isSubmitting}) => (
                        <Stack direction="row" spacing="5">
                            <Button type='button' disabled={hp === 100} colorScheme="green" isLoading={isSubmitting}>Curar Vida</Button>
                            <Button type='button' colorScheme="blue" isLoading={isSubmitting}>Curar Saninade</Button>
                        </Stack>
                    )}
                </Formik>
            </Stack>
        </Box>
    )
}

export default Player