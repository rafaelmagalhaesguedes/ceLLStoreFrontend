import { HeaderContainer, HeaderWrapper } from './Styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* Logo */}
        <div>
          <h1>Logo</h1>
        </div>
        {/* Search */}
        <div>
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        {/* Cart Button */}
        <button type="button">Cart</button>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
