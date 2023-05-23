import styled from 'styled-components';
import {Color} from './../../constant';

interface NumberCardProps {
  readonly $isSelected: boolean;
  readonly $highLight: boolean;
}

export const StyledNumberCard = styled.div<NumberCardProps>`
  border-radius: 5px;
  border: 1px solid #e9f2f8;
  width: 30px;
  height: 30px;
  margin-top:4px;
  margin-bottom:4px;
  font-size: 16px;
  font-weight:600;
  line-height: 28px;
  color: ${(props: NumberCardProps) => {
    if (props.$highLight || props.$isSelected) return  Color.secondaryColor;
    return Color.primaryColor;
  }};
  background-color: ${(props: NumberCardProps) => {
    if (props.$highLight) {
      return 'green'
    } else {
      return props.$isSelected ? '#c5202b' : '#e9f2f8'
    }
  }
  }
`;
