import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 80%;
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
