import styled from 'styled-components';

export const MovieContainer = styled.div`
  margin: 30px auto;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 846px;
  }
`;
export const MovieReviewsList = styled.ul`
    padding: 0 10px;
    & li {
        width: 100%;
    }

    & p {
    text-align: justify;
  }

`;
export const MovieTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const MovieAlmostTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
`;

export const MovieContent = styled.p`
  margin-bottom: 15px;
  text-align: justify;
`;

export const MovieReviewsItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc(100% / 2);
  }
`;