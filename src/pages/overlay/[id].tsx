import { Box, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Text, Image } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import Layout from '../../components/layoyut';
import { useUserQuery } from '../../generated/graphql';
import Bar from '../../components/bar';
import { selectPlayerImage } from '../../utils/selectPlayerImg';

const OverlayPage : React.FC<any> = ({}) => {
    const router = useRouter()
    const pid : number = Number(router.query.id as string);
    
    const [{data, fetching, error }] = useUserQuery({variables: {id: pid}});

    if (fetching) return <p>Loading...</p>

    if (error) return `Error ${error}`

    let player = data.user

    return (
        <Box p={4} m={'auto'}>  

            <Text p={5} fontSize="3xl">{player.username}'s overlay page</Text>
            <Box p={10} background={'transparent'}>
                <Box p={10} borderColor="black" border="5px">
                    <Bar current={player.currentHealth} max={player.maxHealth} width={'14rem'} height={'4rem'} displayValue={true} color={"red"}/>
                </Box>
                <Box p={10} borderColor="black" border="5px">
                    <Bar current={player.currentSanity} max={player.maxSanity} width={'14rem'} height={'4rem'} displayValue={true} color={"#5b1d8a"}/>
                </Box>
                <Box size="sm" alignItems="center">
                    <Image boxSize="320px" src={selectPlayerImage(player)} />
                </Box>
            </Box>
        </Box>
    )
}

export default OverlayPage;