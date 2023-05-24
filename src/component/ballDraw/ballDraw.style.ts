import styled, { keyframes } from 'styled-components';
import { Color } from './../../constant';

export const StyledBallDrawSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const StyledLoadingSpin = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-top-color: #999999;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`

export const StyledGetResultButton = styled.button`
    text-align: center;
    width:300px;
    background-color: ${(props) => props.disabled ? Color.gray : Color.primaryColor};
    opacity: ${(props) => props.disabled ? '0.5' : '1'};
    color: ${Color.secondaryColor};
    border-radius: 50px;
    padding: 8px 0;
    border: 0px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledBallDrawContainer = styled.div`
    display: flex;
    width 60%; 
    justify-content: center; 
    align-items: center;
`

const fadeIn = keyframes `
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `
interface BallNumberProps {
    index: number;
}

export const StyledBallNumber = styled.div<BallNumberProps>`
    width: 30px;
    font-size: 1.2em; 
    padding: 0.2em 0.5em; 
    border: 1px solid #565656; 
    border-radius: 5px; 

    // opacity: 0;
    // animation-name: ${fadeIn};
    // animation-duration: 1s;
    // animation-delay: ${(props) => props.index * 2}s;
    // animation-fill-mode: forwards;

    &:not(:last-child){
        margin-right:10px;
    } 
`