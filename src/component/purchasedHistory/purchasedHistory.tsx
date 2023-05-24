import React, { useState } from 'react';
import { StyledItem, StyledList, StyledTab, StyledTabContainer } from './purchasedHistory.style';
import NumberCard from '../numberCard/numberCard';
import { BallContext, BallContextProps } from '../../contexts/ballContext';

const CurrentPlayTab = () => {

    const { purchasedTickets, currentBallDrawnNumber } = React.useContext(
        BallContext
    ) as BallContextProps;

    return (
        <>
            {purchasedTickets.map((eachTicket, index) =>
                <StyledList>
                    <div>{index +1}.</div>
                    <StyledItem key={index}>
                        {eachTicket.map((number, numberIndex) =>
                            <NumberCard key={numberIndex} ballNumber={number} selectable={false} highLight={currentBallDrawnNumber.includes(number)} />
                        )}
                    </StyledItem>
                </StyledList>
            )}
        </>
    )
}

const CompletedTab = () => {
    // const { completedTickets } = React.useContext(
    //     BallContext
    //   ) as BallContextProps;

    // return (
    //     <>
    //         {completedTickets.map((eachTicket, index) => 
    //             <StyledList key={index}>
    //                 {eachTicket.map((number, numberIndex)=>
    //                     <NumberCard key={numberIndex} ballNumber={number} />
    //                 )}
    //             </StyledList>
    //         )}
    //     </>
    // )
    return (
        <>this is not done :(</>
    )
}

const PurchasedHistory = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabList = [
        { Title: 'In Play', content: CurrentPlayTab() },
        { Title: 'Completed', content: CompletedTab() }
    ]



    return (
        <>
            <h1>Purchased History</h1>
            <StyledTabContainer>
                {tabList.map((tab, index) => {
                    return <StyledTab key={index} $isSelected={selectedTab === index} onClick={() => setSelectedTab(index)}>{tab.Title}</StyledTab>
                })}
                {/* <StyledTab $isSelected={true}>In Play</StyledTab>
                <StyledTab $isSelected={false}>Completed</StyledTab> */}
            </StyledTabContainer>
            {tabList[selectedTab].content}
        </>
    )
}

export default PurchasedHistory