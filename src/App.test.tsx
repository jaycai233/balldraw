import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buyTickets = screen.getByText(/Buy Tickets/i);
  const purchasedHistory = screen.getByText(/Purchased History/i);
  const ballDrawResult = screen.getByText(/Ball Draw Result/i);

  expect(buyTickets).toBeInTheDocument();
  expect(purchasedHistory).toBeInTheDocument();
  expect(ballDrawResult).toBeInTheDocument();
});
