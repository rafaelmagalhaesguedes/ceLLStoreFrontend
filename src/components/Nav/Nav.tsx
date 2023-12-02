/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from '../../helpers/categories';
import ProductContext from '../../context/ProductContext';
import {
  MenuItem, NavFilter,
  NavContainer, NavMain, NavWrapper, Submenu } from './Styles';

function Nav() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const {
    setCategorie,
    filterFreeShipping,
    filterMostExpensive,
    filterCheapest,
    getFavorites,
    favorites,
  } = useContext(ProductContext);

  const filters = [
    { id: 'cheapest', name: 'Menor Preço', action: filterCheapest },
    { id: 'mostExpensive', name: 'Maior Preço', action: filterMostExpensive },
    { id: 'freeShipping', name: 'Frete Grátis', action: filterFreeShipping },
  ];

  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <NavContainer>
      <NavWrapper>
        <NavMain>
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
        </NavMain>
        <NavFilter>
          <select
            onChange={ (e) => {
              const selectedFilter = filters
                .find((filter) => filter.id === e.target.value);
              if (selectedFilter) {
                selectedFilter.action();
              }
            } }
          >
            <option value="">Ordenar por</option>
            {filters.map((filter) => (
              <option key={ filter.id } value={ filter.id }>
                {filter.name}
              </option>
            ))}
          </select>
        </NavFilter>
      </NavWrapper>
    </NavContainer>
  );
}

export default Nav;
