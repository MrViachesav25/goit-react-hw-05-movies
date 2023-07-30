import styled from 'styled-components';

export const MovieContainer = styled.div`
  margin: 30px auto;
`;
export const MovieReviewsList = styled.ul`
    padding: 0 10px;
    & li {
        width: 100%;
    }
`;
export const MovieTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: 700;
`;

export const MovieAlmostTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
`;

export const MovieContent = styled.p`
  margin-bottom: 15px;
  text-align: justify;
`;
