import { HeaderContainer } from './Styles';

function Header() {
  return (
    <HeaderContainer>
      {/* Logo */}
      <div>
        {/* <img src="" alt="Logo" /> */}
        <h1>Logo</h1>
      </div>
      {/* Search */}
      <div>
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      {/* Menu */}
      <button type="button">Cart</button>
    </HeaderContainer>
  );
}

export default Header;
