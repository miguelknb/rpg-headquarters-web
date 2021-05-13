import { Box,   Flex,   Text} from '@chakra-ui/react';
import React from 'react'
import PlayerCard from '../components/player'
import { useMeQuery } from '../generated/graphql';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/layoyut';



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