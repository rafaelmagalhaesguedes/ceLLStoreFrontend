import { NavTop, NavTopContainer } from './Styles';

function NavBarTop() {
  return (
    <NavTopContainer>
      <NavTop>
        <ul>
          <li>
            <a href="/">LinkedIn</a>
            <a href="/">GitHub</a>
            <a href="/">Instagran</a>
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
