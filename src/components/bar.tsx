import { background } from '@chakra-ui/styled-system';
import React from 'react';
import styled from 'styled-components'

const BarContainer = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    /* border: 4px solid black; */
`
const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgColor};
    z-index: 2;
    opacity: 90%;
`
const CurrentBar = styled.div`
    display: flex;
    background-color: ${props => props.color};
    max-width: 100%;
    width: ${props => `${props.percentage}%`};
    height: 100%;
    z-index: 5;
    opacity: 85%;
    transition: width ease-in-out .5s;
`

const Texture = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: url('https://filterforge.com/filters/11141.jpg');
`

const BarValue = styled.p`
    padding: 1rem;
    color: white;
    font-size: 1.3rem;
`

const StatusBar : React.FC<any> = ({current, max, displayValue, width, height, color, bgColor}) => {


    let percentage = current/max * 100;
    // console.log(current, max, percentage, color)

    return (
        <BarContainer width={width} height={height}>
            <Texture>
            <Background bgColor={bgColor}>
                <CurrentBar percentage={percentage} color={color}>

                    <BarValue>
                        {displayValue ? current + '/' + max
                            :    ''}
                    </BarValue>
                </CurrentBar>
            </Background>
            </Texture>
        </BarContainer>
    )
}

export default StatusBar