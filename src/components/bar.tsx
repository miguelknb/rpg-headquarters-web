import { background } from '@chakra-ui/styled-system';
import React from 'react';
import styled from 'styled-components'

const mockCharacter = {
    id: 3,
    name: "Kcanibu",
    maxHealth: 20,
    currentHealth: 10,
    imgUrl: "https://i.pinimg.com/originals/c9/b1/35/c9b13507663ed4c9234386cee9762ba9.jpg"
}

const BarContainer = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    border: 4px solid black;
`
const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: darkred;
    z-index: 2;
`
const CurrentBar = styled.div`
    display: flex;
    background-color: red;
    max-width: 100%;
    width: ${props => `${props.percentage}%`};
    width: 40%;
    height: 100%;
    z-index: 5;
`

const BarValue = styled.p`
    color: black;
`

const StatusBar : React.FC<any> = ({current, max, displayValue, width, height}) => {


    let percentage = current/max * 100;


    return (
        <BarContainer width={width} height={height}>
            <Background>
                <CurrentBar percentage={percentage}>
                    <BarValue>
                        {displayValue ? current + '/' + max
                            :    ''}
                    </BarValue>
                </CurrentBar>
            </Background>
        </BarContainer>
    )
}

export default StatusBar