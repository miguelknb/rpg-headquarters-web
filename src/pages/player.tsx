import React from 'react'
import PlayerCard from '../components/player'

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 33,
    currentHealth: 17,
    imgUrl: "https://i.pinimg.com/originals/c5/66/0e/c5660edef7f02e24e62d770c69419ae0.png",
    
}


const PlayerPage : React.FC<any> = ({}) => {
    
    return (
        <PlayerCard player={mockCharacter}/>
    ) 
}

export default PlayerPage