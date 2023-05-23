import React, { useState } from 'react';
import ballDrawService from '../../service/ballDrawService';
import { StyledBallDrawContainer, StyledBallDrawSection, StyledBallNumber, StyledGetResultButton, StyledLoadingSpin } from './ballDraw.style';
import { BallContext, BallContextProps } from '../../contexts/ballContext';
const BallDraw = () => {
    const [isDisplaying, setIsDisplaying] = useState(false);
    const [ballDrawnNumberList, setBallDrawnNumberList] = useState<number[]>([]);
    const { setCurrentBallDrawnNumber } = React.useContext(
        BallContext
      ) as BallContextProps;
    const getBallDraw = () => {
        setIsDisplaying(true)
        const numberArray = ballDrawService.getBall().sort((a, b) => a - b)
        setBallDrawnNumberList(numberArray);
        setTimeout(() => {
            setCurrentBallDrawnNumber(numberArray);
            setIsDisplaying(false)
        }, 20000);
    }

    return (
        <StyledBallDrawSection>
            <h1>Ball Draw Result</h1>
            <StyledGetResultButton disabled={isDisplaying} onClick={() => getBallDraw()}> {!isDisplaying ? 'Get result': <StyledLoadingSpin />}</StyledGetResultButton>
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