import { createContext } from 'react';
import { ProductType } from '../types/types';

export type ProductContextType = {
  product: ProductType[];
  setProduct: (product: ProductType[]) => void;
  setCategorie: (url: string) => void;
  filterByString: any;
  filterFreeShipping: () => void;
  filterMostExpensive: () => void;
  filterCheapest: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const ProductContext = createContext({} as ProductContextType);

export default ProductContext;
