import styled from 'styled-components';
import { Color } from '../../constant';

interface TabProps {
    readonly $isSelected: boolean;
  }

export const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: row;

    & button:first-child{
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    & button:last-child{
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`

export const StyledTab = styled.button<TabProps>`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #e9f2f8;
    margin-top:4px;
    margin-bottom:4px;
    font-size: 16px;
    font-weight:600;
    line-height: 28px;
    color: ${(props: TabProps) => (props.$isSelected ? Color.secondaryColor : Color.primaryColor)};
    background-color: ${(props: TabProps) =>
    props.$isSelected ? '#c5202b' : '#e9f2f8'};
`

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`