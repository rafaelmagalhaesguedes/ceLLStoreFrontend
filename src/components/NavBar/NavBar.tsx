import { useContext, useState } from 'react';
import {
  NavbarResponsive,
  NavbarContainer,
  MenuToggleButton,
  Bar,
  NavbarLinks,
  NavLinked,
} from './Styles';
import ProductContext from '../../context/ProductContext';
import { categories } from '../../helpers/categories';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, setCategorie, getFavorites } = useContext(ProductContext);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarResponsive>
      <NavbarContainer>
        <MenuToggleButton
          className={ isOpen ? 'active' : '' }
          onClick={ handleToggleMenu }
        >
          <Bar />
          <Bar />
          <Bar />
        </MenuToggleButton>

        <NavbarLinks className={ isOpen ? 'active' : '' }>
          {categories.map((category) => (
            <div key={ category.id }>
              <NavLinked
                to="/"
                onClick={ () => {
                  setCategorie(category.id);
                  closeMenu();
                } }
              >
                {category.name}
              </NavLinked>
            </div>
          ))}
          <button
            onClick={ () => {
              getFavorites();
              closeMenu();
            } }
          >
            Meus favoritos
            {' '}
            (
            {favorites && favorites.length}
            )
          </button>
        </NavbarLinks>
      </NavbarContainer>
    </NavbarResponsive>
  );
}

export default Navbar;
