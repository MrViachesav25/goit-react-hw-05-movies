import styled from 'styled-components';

export const MovieCastList = styled.ul`
  padding: 0 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`;

export const MovieCastItem = styled.li`
  width: calc((100% - 80) / 6);

  & h3 {
     width: 180px;
  }
`;
export const MovieCastTitle = styled.p`
  width: 140px;
`;
export const MovieCastImage = styled.img`
  width: 150px;
  margin-bottom: 10px;
  border-radius: 4px;
`;