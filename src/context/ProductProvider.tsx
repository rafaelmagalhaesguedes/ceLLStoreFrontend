// ProductProvider.tsx
import { ReactNode, useEffect, useState } from 'react';
import ProductContext from './ProductContext';
import { ProductType } from '../types/types';
import useFilter from '../hooks/useFilter';
import { useFilterByString } from '../hooks/useFilterByString';
import useFetchData from '../hooks/useFetchData';
import { useCart } from '../hooks/useCart';
import useFavorites from '../hooks/useFavorites';

type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [categorie, setCategorie] = useState<string>('MLB1051'); // default category is 'MLB1051' (Smartphones)
  const [cart, setCart] = useState<ProductType[]>([]);
  const getFav = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [favorites, setFavorites] = useState<ProductType[]>(getFav);

  const { fetchData, loading } = useFetchData(setDataProduct, categorie);
  const { filterByString } = useFilterByString(dataProduct, setProduct);
  const {
    filterCheapest,
    filterMostExpensive,
    filterFreeShipping } = useFilter(dataProduct, setProduct);
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity, deleteItem, cartTotalFormatted } = useCart(cart, setCart);

  const { addFavorite, isFavorited } = useFavorites(favorites);

  const getFavorites = () => {
    setProduct(getFav);
  };

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(getCart);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, categorie]);

  useEffect(() => {
    setProduct(dataProduct);
  }, [dataProduct]);

  const contextValue = {
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    cartTotalFormatted,
    dataProduct,
    product,
    loading,
    setProduct,
    setCategorie,
    filterByString,
    filterCheapest,
    filterMostExpensive,
    filterFreeShipping,
    favorites,
    isFavorited,
    addFavorite,
    setFavorites,
    getFavorites,
  };

  return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
