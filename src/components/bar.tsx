import { background } from '@chakra-ui/styled-system';
import React from 'react';
import styled from 'styled-components'

const BarContainer = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    border: 4px solid black;
`
const Background = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: ${props => props.color}; */
    z-index: 2;
`
const CurrentBar = styled.div`
    display: flex;
    background-color: ${props => props.color};
    max-width: 100%;
    width: ${props => `${props.percentage}%`};
    height: 100%;
    z-index: 5;
`

const BarValue = styled.p`
    color: black;
`

const StatusBar : React.FC<any> = ({current, max, displayValue, width, height, color}) => {


    let percentage = current/max * 100;
    // console.log(current, max, percentage, color)

    return (
        <BarContainer width={width} height={height}>
            <Background color={color}>
                <CurrentBar percentage={percentage} color={color}>
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