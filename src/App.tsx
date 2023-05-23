import React from 'react';
import './App.css';
import BuyTicket from './component/buyTicket/buyTicket';
import PurchasedHistory from './component/purchasedHistory/purchasedHistory';
import BallContextProvider from './contexts/ballContext';
import BallDraw from './component/ballDraw/ballDraw';

function App() {
  return (
    <div className="App">
      <BallContextProvider>
        <BuyTicket />
        <PurchasedHistory />
        <BallDraw />
      </BallContextProvider>
    </div>
  );
}

export default App;
