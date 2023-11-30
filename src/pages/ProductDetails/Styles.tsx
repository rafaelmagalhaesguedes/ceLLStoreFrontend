import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonBack = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-start;
  margin-left: 150px;
  margin-top: 20px;

  &:hover {
    background-color: #bbb;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 80%;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px #ccc;
  padding: 20px;
  background-color: #fff;
`;

export const Condition = styled.div`
  font-size: 0.8rem;
  color: #555;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TotalSold = styled.span`
  font-size: 0.8rem;
  color: #555;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 0 10px #ccc;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Attributes = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  li {
    color: #222;
    font-size: 0.9rem;
    font-weight: 400;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: #555;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px #ccc;
  padding: 20px;
  background-color: #fff;
  align-items: center;
  margin-top: 20px;
`;

export const Shipping = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #555;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const ButtonCart = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #008000;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
