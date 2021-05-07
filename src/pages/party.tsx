import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import PlayerCard from '../components/player'

const party = [
    {
        id: 3,
        name: "Kcanibu",
        maxHealth: 20,
        currentHealth: 10,
        imgUrl: "https://i.pinimg.com/originals/18/29/e1/1829e1a6f0997b355e8fc68968b2dd48.jpg"
    },
    {
        id: 2,
        name: "Marco",
        maxHealth: 20,
        currentHealth: 10,
        imgUrl: "https://i.pinimg.com/originals/c9/b1/35/c9b13507663ed4c9234386cee9762ba9.jpg"
    },
    {
        id: 1,
        name: "João Frango",
        maxHealth: 20,
        currentHealth: 10,
        imgUrl: "https://i.pinimg.com/474x/33/4d/42/334d425ebe7b8134d7c83170522b7816.jpg"
    },
    {
        id: 5,
        name: "Elias",
        maxHealth: 20,
        currentHealth: 10,
        imgUrl: "https://pbs.twimg.com/profile_images/1268738858327388160/KlDBJkgZ.jpg"
    },

]

const PartyPage : React.FC<any> = ({}) => {
    
    return (
    <Box mt="2rem" w="100%" mb="2rem">
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {
                party.map( (player) => {
                    return <PlayerCard player={player}/>
                })
            }
        </Grid>
    </Box>
    )
}

export default PartyPage;