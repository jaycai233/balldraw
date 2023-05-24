import { render, screen, fireEvent } from '@testing-library/react';
import BallDraw from './ballDraw';
import BallContextProvider from '../../contexts/ballContext';

test('ballDraw button loading', ()=>{
    const { container } = render(<BallContextProvider><BallDraw /></BallContextProvider>);

    const getResult = screen.getByText('Get result');

    expect(getResult).toBeInTheDocument();

    fireEvent.click(getResult);

    const loading = container.getElementsByClassName('sc-HzRMQ dGgbbE');
    // loading is displayed
    expect(loading.length).toBe(1);
})