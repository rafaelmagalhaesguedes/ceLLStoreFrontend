import { Nav, NavContainer } from './Styles';

function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <ul>
          <li>
            <a href="/">Celulares e Telefones</a>
            <a href="/">Câmeras e Acessórios</a>
            <a href="/">Eletrônicos, Áudio e Vídeo</a>
            <a href="/">Games</a>
            <a href="/">Informática</a>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
