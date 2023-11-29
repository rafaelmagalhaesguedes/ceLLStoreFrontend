import { createContext } from 'react';
import { ProductType } from '../types/types';

export type ProductContextType = {
  cart: ProductType[];
  setCart: (cart: ProductType[]) => void;
  product: ProductType[];
  dataProduct: ProductType[];
  setProduct: (product: ProductType[]) => void;
  setCategorie: (url: string) => void;
  filterByString: (search: string) => void;
  filterFreeShipping: () => void;
  filterMostExpensive: () => void;
  filterCheapest: () => void;
  loading: boolean;
};

const ProductContext = createContext({} as ProductContextType);

export default ProductContext;
