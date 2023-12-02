/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from '../../helpers/categories';
import { MenuItem, Nav, NavContainer, Submenu } from './Styles';
import ProductContext from '../../context/ProductContext';

function NavBar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const {
    setCategorie,
    filterFreeShipping,
    filterMostExpensive,
    filterCheapest,
    getFavorites,
    favorites,
  } = useContext(ProductContext);

  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <NavContainer>
      <Nav>
        <MenuItem>
          {categories.map((category) => (
            <button key={ category.id } onClick={ () => setCategorie(category.id) }>
              {category.name}
            </button>
          ))}
        </MenuItem>
        <MenuItem>
          <button onClick={ getFavorites }>
            Meus favoritos
            {' '}
            (
            {favorites.length}
            )
          </button>
          <MenuItem onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
            <span>
              Filtrar
              {' '}
              <FontAwesomeIcon icon={ faChevronDown } />
            </span>
            {isSubmenuOpen && (
              <Submenu>
                <button onClick={ filterCheapest }>
                  Menor Preço
                </button>
                <button onClick={ filterMostExpensive }>
                  Maior Preço
                </button>
                <button onClick={ filterFreeShipping }>
                  Frete Grátis
                </button>
              </Submenu>
            )}
          </MenuItem>
        </MenuItem>

      </Nav>
    </NavContainer>
  );
}

export default NavBar;
