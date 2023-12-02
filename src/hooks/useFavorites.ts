import { useState, useEffect, useContext } from 'react';
import { ProductType } from '../types/types';
import ProductContext from '../context/ProductContext';

const useFavorites = (item: any) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { setFavorites } = useContext(ProductContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.some((favorite: ProductType) => favorite.id === item.id));
  }, [item]);

  const addFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    const index = favorites
      .findIndex((favorite: ProductType) => favorite.id === item.id);

    if (index !== -1) {
      favorites.splice(index, 1);
      setIsFavorited(false);
    } else {
      favorites.push(item);
      setIsFavorited(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setFavorites(favorites);
  };

  return { isFavorited, addFavorite };
};

export default useFavorites;
