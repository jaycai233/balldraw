import React, { useEffect, useState } from 'react';
import { StyledNumberCard } from './numberCard.style';
import { BallContext, BallContextProps } from '../../contexts/ballContext';
import { NUMBER_SELECTED_COUNT } from '../../constant';

interface numberCardProps {
  ballNumber: number;
  highLight?: boolean;
  selectable?: boolean;
}

const NumberCard: React.FC<numberCardProps> = ({ballNumber, highLight = false, selectable = true})  => {
  const { selectedBallList, saveNumber, removeNumber } = React.useContext(
    BallContext
  ) as BallContextProps;
  const checkIfInList = selectable && selectedBallList.includes(ballNumber);
  const [isSelected, setIsSelect] = useState(checkIfInList);

  useEffect(()=>{
    if (selectable) {
      const checkIfInList = selectedBallList.includes(ballNumber);
      setIsSelect(checkIfInList);
    }
  }, [ballNumber, selectedBallList])

  return (
      <StyledNumberCard
        $isSelected={isSelected}
        $highLight={highLight}
        onClick={() => {
          if (selectedBallList.length >= NUMBER_SELECTED_COUNT && !isSelected) return;
          !isSelected ?  saveNumber(ballNumber) : removeNumber(ballNumber);
          setIsSelect(!isSelected);
        }}
      >
        {ballNumber}
      </StyledNumberCard>
  );
};

export default NumberCard;
