import { render, screen } from '@testing-library/react';
import BuyTicket from './buyTicket';
import BallContextProvider from './../../contexts/ballContext';
test('render ball 1 to 80', () => {
    const { container } = render(<BallContextProvider><BuyTicket /></BallContextProvider>);
    const buyTickets = screen.getByText(/Buy Tickets/i);
   
    const ballList = container.getElementsByClassName('sc-eLqIir cGxlId')
    expect(buyTickets).toBeInTheDocument();
    expect(ballList.length).toBe(80);

  });
  