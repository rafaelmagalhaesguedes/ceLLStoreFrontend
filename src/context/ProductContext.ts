import { createContext } from 'react';
import { ProductType } from '../types/types';

export type ProductContextType = {
  cart: ProductType[];
  setCart: (cart: ProductType[]) => void;
  addToCart: (item: ProductType) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  cartTotalFormatted: string;
  product: ProductType[];
  dataProduct: ProductType[];
  setProduct: (product: ProductType[]) => void;
  setCategorie: (url: string) => void;
  filterByString: (search: string) => void;
  filterFreeShipping: () => void;
  filterMostExpensive: () => void;
  filterCheapest: () => void;
  loading: boolean;
  isFavorited: boolean;
  addFavorite: (itemFavorite: ProductType) => void;
  favorites: ProductType[];
  setFavorites: (favorites: ProductType[]) => void;
  getFavorites: () => void;
};

const ProductContext = createContext({} as ProductContextType);

export default ProductContext;
