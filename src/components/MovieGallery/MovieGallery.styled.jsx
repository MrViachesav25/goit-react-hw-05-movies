import styled from 'styled-components';

export const MovieBox = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
`;
export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto - fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;