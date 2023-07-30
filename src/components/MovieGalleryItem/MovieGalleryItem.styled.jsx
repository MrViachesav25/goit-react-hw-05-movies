import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 150ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 150ms cubic-bezier(0.075, 0.82, 0.165, 1);
   
    &:hover {
        background-color: teal;
        transform: scale(1);
        cursor: pointer;
    }
`;

export const MovieLink = styled(Link)`
  color: #434455;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
  text-decoration: none;
  &:hover {
    color: #4d5ae5;
  }
`;