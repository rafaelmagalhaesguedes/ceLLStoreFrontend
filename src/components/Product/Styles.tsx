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
`;

export const ButtonCart = styled.button`
  background-color: #f80;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
`;
