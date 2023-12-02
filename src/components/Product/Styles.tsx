import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: auto;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: stretch;
  width: 100%;
  heigth: auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  heigt: auto;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  @media (max-width: 479px) {
    width: 100%;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 40%;
  }

  @media (min-width: 769px) and (max-width: 959px) {
    width: 25%;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 20%;
  }
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.2rem;
`;

export const Condition = styled.div`
  font-size: 0.8rem;
  color: #f80;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const ImageCard = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleCard = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    font-size: 0.8rem;
    color: #000;
  }
`;

export const PriceCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;

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

export const Image = styled.img`
  width: 120px;
  height: auto;
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
