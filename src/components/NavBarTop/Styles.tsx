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

  @media (max-width: 768px) {
    padding: 0.3rem 1rem;
  }
`;

export const TitleNav = styled.h1`
  font-size: 0.8rem;
  font-weight: normal;
  letter-spacing: 0.9px;
  margin: 0;
  padding: 0 0.6rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleNavTop = styled.h1`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 0.8rem;
    font-weight: normal;
    letter-spacing: 0.9px;
    margin: 0;
    padding: 0 0.6rem;
  }
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
    font-size: 0.8rem;
    font-weight: 300;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: normal;
    margin: 0 0.5rem;
  }

  .brand-desc {
    display: none;
  }

  @media (max-width: 768px) {
    .home, .cart, .login {
      display: none;
    }
    .brand-desc {
      display: block;
    }
  }
`;
