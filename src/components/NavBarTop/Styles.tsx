import styled from 'styled-components';

export const NavTopContainer = styled.div`
  display: flex;
  background-color: #000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0.3rem 2rem;
  width: 100%;
`;

export const TitleNavTop = styled.h1`
  font-size: 0.8rem;
  font-weight: normal;
  margin: 0;
  padding: 0 0.6rem;
`;

export const NavBottomContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;

  li {
    gap: 1rem;
    display: flex;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: normal;
    margin: 0 0.5rem;
  }
`;
