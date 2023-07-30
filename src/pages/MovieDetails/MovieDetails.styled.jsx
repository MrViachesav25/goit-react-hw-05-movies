import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(Link)`
  padding: 8px 16px;
  margin:  20px 0;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: blue;
  }
`;

export const MovieDetailsList = styled.ul`
  padding: 24px;
  display: flex;
  gap: 20px;
`;

export const MovieDetailsImg = styled.img`
  width: 248px;
  height: 315px;
  border-radius: 5px;
  margin: auto;
`;

export const MovieList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 36px;
  
`;

export const CurrentLink = styled(Link)`
  padding: 8px 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  color: #303f9f;
  border: 1px solid  #303f9f;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: blue;
    border: 1px solid blue;
  }
`;