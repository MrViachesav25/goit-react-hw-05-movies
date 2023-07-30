import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        color: #ffff;

        &:hover > h2 {
        color: #ffff;
      }
    }
`;

export const MovieLink = styled(Link)`
  color: #434455;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  letter-spacing: 0.32px;
  text-decoration: none;
  &:hover {
    color: #4d5ae5;
  }
`;

export const MovieGalleryItemImage = styled.img`
  width: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
export const MovieGalleryItemTitle = styled.h2`
  margin: 8px 8px;
  font-size: 2rem;
  font-weight: 700;
  min-height: 124px;
  color: #3f51b5;
`;