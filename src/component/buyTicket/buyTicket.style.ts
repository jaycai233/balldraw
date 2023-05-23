import styled from 'styled-components';
import {Color} from './../../constant';
export const StyledBuyTicketContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(10,50px);
    justify-content: center;
    margin-bottom: 20px;
`

export const StyledPurchaseButton = styled.button`
    text-align: center;
    width:300px;
    background-color: ${(props) => props.disabled ? Color.gray : Color.primaryColor};
    opacity: ${(props) => props.disabled ? '0.5' : '1'};
    color: ${Color.secondaryColor};
    border-radius: 50px;
    padding: 8px 0;
    border: 0px;
    margin-bottom: 20px;
`