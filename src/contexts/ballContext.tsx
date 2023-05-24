import React, { useReducer } from 'react';
import { NUMBER_SELECTED_COUNT } from '../constant';

export interface BallContextProps {
  selectedBallList: number[];
  purchasedTickets: number[][];
  completedTickets: number[][];
  currentBallDrawnNumber: number[];
  setCurrentBallDrawnNumber: (numbers: number[])=>void;
  saveNumber: (number: number) => void;
  removeNumber: (number: number) => void;
  clearAllNumber: () => void;
  addPurchasedTickets: (newTicket: number[]) => void;
  clearPurchasedTickets: () => void;
  movePurchasedTicketToCompleted: () => void;
  forceUpdateContext: ()=>void;
}

interface Props {
  children: React.ReactNode;
}

export const BallContext = React.createContext<BallContextProps | null>(null);

const BallContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedBallList, setSelectedBallList] = React.useState<number[]>([]);
  const [purchasedTickets, setPurchasedTickets] = React.useState<number[][]>([]);
  const [completedTickets, setCompletedTickets] = React.useState<number[][]>([]);
  const [currentBallDrawnNumber, setCurrentBallDrawnNumber] = React.useState<number[]>([]);
  const [,forceUpdateContext] =  useReducer(x => x + 1, 0);


  const saveNumber = (newNumber: number) => {
    setSelectedBallList([...selectedBallList, newNumber].sort((a, b) => a - b));
  };

  const removeNumber = (deleteNumber: number) => {
    const tempArray = selectedBallList.filter(each => each !== deleteNumber);
    setSelectedBallList(tempArray);
  };

  const clearAllNumber = () => {
    setSelectedBallList([]);
  };

  const addPurchasedTickets = (newTicket: number[]) => {
    if (newTicket.length !== NUMBER_SELECTED_COUNT) return 'ball number not valid';
    setPurchasedTickets([...purchasedTickets, newTicket]);
  }

  const clearPurchasedTickets = () => {
    setPurchasedTickets([]);
  }

  const movePurchasedTicketToCompleted = () => {
    setCompletedTickets([...purchasedTickets, ...completedTickets]);
    setPurchasedTickets([]);
  }


  const value: BallContextProps = {
    selectedBallList,
    purchasedTickets,
    completedTickets,
    currentBallDrawnNumber,
    setCurrentBallDrawnNumber,
    saveNumber,
    removeNumber,
    clearAllNumber,
    addPurchasedTickets,
    clearPurchasedTickets,
    movePurchasedTicketToCompleted,
    forceUpdateContext
  };

  return <BallContext.Provider value={value}>{children}</BallContext.Provider>;
};
export default BallContextProvider;
