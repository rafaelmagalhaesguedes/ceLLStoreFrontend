import { NavTop, NavTopContainer } from './Styles';

function NavBarTop() {
  return (
    <NavTopContainer>
      <NavTop>
        <ul>
          <li>
            <a href="/">A melhor loja do Brasil!</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/">Login</a>
            <a href="/">Cadastrar</a>
          </li>
        </ul>
      </NavTop>
    </NavTopContainer>
  );
}

export default NavBarTop;
