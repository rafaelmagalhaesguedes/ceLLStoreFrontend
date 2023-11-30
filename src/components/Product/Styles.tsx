import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  heigth: auto;
  margin-top: 1rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  heigth: auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  heigt: auto;
  margin: 1.5rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    font-size: 0.8rem;
  }

  span {
    font-size: 0.7rem;
    color: #f80;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: green;
    font-weight: 600;
  }
`;

export const ButtonCart = styled.button`
  background-color: #f80;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f60;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0 2rem 0;
`;

export const ButtonLoadMore = styled.button`
  background-color: #f80;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.5rem 0;
  width: 20rem;

  &:hover {
    background-color: #f60;
  }
`;

export const ProductNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;

  h1 {
    color: #fff;
  }
`;
