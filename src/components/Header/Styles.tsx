import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  padding: 1rem;
  color: #fff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0 1rem;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #999;
  width: 40%;
  padding: 0.1rem 0.5rem;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 0.5rem;
  }

  :focus {
    outline: none;
    border: none;
  }

  button {
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
`;
