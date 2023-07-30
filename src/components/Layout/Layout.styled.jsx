import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieMenu = {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '24px',
  borderBottom: '1px solid #3f51b5',
};

export const MovieHeader = styled.header`
  background: #fff;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);
`;

export const MovieNav = styled.nav`
  padding: 15px 15px;
`;
export const MovieNavLink = styled(NavLink)`
  position: relative;
  color: #2e2f42;
  text-decoration: none;
  margin-right: 20px;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.32px;
  transition: color 250ms linear;
  &.active {
    color:  #303f9f;
  }
  &:hover {
    color:  #303f9f;
    &::after {
      transform: scaleX(1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 100%;
    height: 4px;
    background-color:  #303f9f;
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 250ms linear;
  }
  &.active::after {
    transform: scaleX(1);
  }
  &:visited {
    color: none;
  }
`;
