import {
  NavBottomContainer, NavTop, NavTopContainer, TitleNav, TitleNavTop } from './Styles';

function NavBarTop() {
  return (
    <NavTopContainer>
      <NavTop>
        <TitleNav>A melhor loja do Brasil</TitleNav>
        <TitleNavTop>CELL STORE</TitleNavTop>
        <NavBottomContainer>
          <li>
            <a className="home" href="/">Home</a>
            <a className="cart" href="/shopping-cart">Carrinho</a>
            <a className="login" href="/login">Login</a>
          </li>
          <li className="brand-desc">A melhor loja do Brasil</li>
        </NavBottomContainer>
      </NavTop>
    </NavTopContainer>
  );
}

export default NavBarTop;
