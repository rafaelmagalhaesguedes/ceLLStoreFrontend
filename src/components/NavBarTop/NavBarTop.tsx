import { NavBottomContainer, NavTop, NavTopContainer, TitleNavTop } from './Styles';

function NavBarTop() {
  return (
    <NavTopContainer>
      <NavTop>
        <TitleNavTop>A melhor loja do Brasil!</TitleNavTop>
        <NavBottomContainer>
          <li>
            <a href="/">Home</a>
            <a href="/shopping-cart">Carrinho</a>
            <a href="/login">Login</a>
          </li>
        </NavBottomContainer>
      </NavTop>
    </NavTopContainer>
  );
}

export default NavBarTop;
