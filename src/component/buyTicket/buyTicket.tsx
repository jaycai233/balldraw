import React from 'react';
import NumberCard from '../numberCard/numberCard';
import { BallContext, BallContextProps } from '../../contexts/ballContext';
import { StyledBuyTicketContainer, StyledPurchaseButton } from './buyTicket.style';
import { NUMBER_SELECTED_COUNT } from '../../constant';

const BuyTicket = () => {
  const { selectedBallList, clearAllNumber, addPurchasedTickets } = React.useContext(
    BallContext
  ) as BallContextProps;
  const allBallNumber = Array.from(new Array(80), (x, i) => i + 1);
  const purchaseTicket = () => {
    addPurchasedTickets(selectedBallList);
    clearAllNumber();
  }
  return (
    <>
      <StyledBuyTicketContainer>
        {allBallNumber.map((eachNumber, index) => (
          <NumberCard key={index} ballNumber={eachNumber}></NumberCard>
        ))}


        {/* {selectedBallList.map((number)=> 
        <div>{number}</div>
      )} */}
      </StyledBuyTicketContainer>
      <StyledPurchaseButton disabled={selectedBallList.length !== NUMBER_SELECTED_COUNT} onClick={()=>purchaseTicket()}>Buy Ticket</StyledPurchaseButton>
    </>
  );
};

export default BuyTicket;
