import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  background-color: #4A3F35;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2.1rem;
  color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    gap: 2rem;
    display: flex;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 0.5rem;
    letter-spacing: 0.5px;

    &:hover {
      color: #f80;
    }

    &:active {
      color: #fff;
      background-color: #f80;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 0.5rem 1.5rem;
  }
`;

export const NavMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const NavBarResposinve = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: block;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  gap: 2rem;

  span {
    cursor: pointer;
  }
`;

export const Submenu = styled.ul`
  display: none;
  position: absolute;
  width: 150px;
  height: auto;
  margin-left: -4rem;
  margin-top: 1.3rem;
  background-color: #4A3F35;
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.9);

  button {
    margin: 0.5rem 0;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media (max-width: 968px) {
    display: block;
  }
`;

export const NavFilter = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;

  select {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 0.5rem;
    letter-spacing: 0.5px;

    &:hover {
      color: #f80;
    }

    &:active {
      color: #fff;
    }

    &:focus {
      outline: none;
    }

    option {
      background-color: #4A3F35;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 968px) {
    display: flex;
  }
`;
