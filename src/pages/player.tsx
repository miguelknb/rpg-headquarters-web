import React from 'react'
import PlayerCard from '../components/player'

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 20,
    currentHealth: 10,
    imgUrl: "https://i.pinimg.com/originals/c9/b1/35/c9b13507663ed4c9234386cee9762ba9.jpg"
}


const PlayerPage : React.FC<any> = ({}) => {
    
    return (
        <PlayerCard player={mockCharacter}/>
    ) 
}

export default PlayerPage