import { Box,   Flex,   Text} from '@chakra-ui/react';
import React from 'react'
import PlayerCard from '../components/player'
import { useMeQuery } from '../generated/graphql';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/layoyut';

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 33,
    currentHealth: 17,
    imgUrl: "https://i.pinimg.com/originals/c5/66/0e/c5660edef7f02e24e62d770c69419ae0.png",
    
}


const PlayerPage : React.FC<any> = ({}) => {
    
    const [{ data, fetching }] = useMeQuery();

    if (fetching) {
        return (
            <Flex alignItems={'center'}><Text>Loading...</Text></Flex>
        )
    }

    if (data) {    
        return (
            <Layout>
                <PlayerCard player={data.me}/>
            </Layout>
            ) 
    }

    else {
        const router = useRouter()
        router.push('/login')
    }
}

export default PlayerPage