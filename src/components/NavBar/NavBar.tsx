import { Nav, NavContainer } from './Styles';

function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <ul>
          <li>
            <a href="/">Celulares e Telefones</a>
            <a href="/">Cameras e acessórios</a>
            <a href="/">Eletrônicos</a>
            <a href="/">Informática</a>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
