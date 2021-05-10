import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components'
import StatusBar from '../components/bar';
import { Text, Image } from "@chakra-ui/react"

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 33,
    currentHealth: 17,
    imgUrl: "https://i.pinimg.com/originals/c5/66/0e/c5660edef7f02e24e62d770c69419ae0.png"
}

const OverlayPage : React.FC<any> = ({}) => {
    
    return (
        <Box padding={'5rem'} background={'transparent'}>
            <Box padding={'3rem'} border={'solid 2px gray'} w={'60%'}>
                <Stack direction={'row'} spacing={5}>

                    <StatusBar current={mockCharacter.currentHealth} max={mockCharacter.maxHealth} displayValue={false} width={'15rem'} height={'4rem'}/>
                    <Text fontSize="3xl">
                        {mockCharacter.currentHealth}/{mockCharacter.maxHealth}
                    </Text>
                    <Text fontSize="3xl" color="white">
                        {mockCharacter.currentHealth}/{mockCharacter.maxHealth}
                    </Text>
                </Stack>
            </Box>
            <Box padding={'3rem'} border={'solid 2px gray'} w={'60%'} h={'40rem'}>
                <Image boxSize="30rem"  src={mockCharacter.imgUrl} />
            </Box>
        </Box>
    )
}

export default OverlayPage;