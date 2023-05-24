import React, { useReducer, useState } from 'react';
import ballDrawService from '../../service/ballDrawService';
import { StyledBallDrawContainer, StyledBallDrawSection, StyledBallNumber, StyledGetResultButton, StyledLoadingSpin } from './ballDraw.style';
import { BallContext, BallContextProps } from '../../contexts/ballContext';
const BallDraw = () => {
    const [isDisplaying, setIsDisplaying] = useState(false);
    const [ballDrawnNumberList, setBallDrawnNumberList] = useState<number[]>([]);
    const [,forceUpdate] =  useReducer(x => x + 1, 0);
    const { setCurrentBallDrawnNumber, forceUpdateContext } = React.useContext(
        BallContext
    ) as BallContextProps;

    const tempArray: number[] = [];

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const getOneBallDraw = async() => {
        while (tempArray.length < 10) {

            let duplicateNumber = true;
            while (duplicateNumber) {
                const number = ballDrawService.getOneBall();
                if (!tempArray.includes(number)) {
                    tempArray.push(number);
                    duplicateNumber = false;
                    setBallDrawnNumberList(tempArray.sort((a, b) => a - b));
                    setCurrentBallDrawnNumber(tempArray);
                    forceUpdate();
                    forceUpdateContext();
                }

            }
            if (tempArray.length >= 10) {
                setIsDisplaying(false)
            } else{
                await delay(2000)
            }
        }
    }



    const getBallDraw = () => {
        setIsDisplaying(true)
        getOneBallDraw();
    }

    return (
        <StyledBallDrawSection>
            <h1>Ball Draw Result</h1>
            <StyledGetResultButton disabled={isDisplaying} onClick={() => getBallDraw()}> {!isDisplaying ? 'Get result' : <StyledLoadingSpin />}</StyledGetResultButton>
            <StyledBallDrawContainer>
                {ballDrawnNumberList.map((each, index) => {
                    // const random = Math.random() * 100;
                    return <StyledBallNumber key={index * each} index={index}>{each}</StyledBallNumber>
                }
                )}
            </StyledBallDrawContainer>
        </StyledBallDrawSection>
    )
}

export default BallDraw;