import { createContext } from 'react';
import { ProductType } from '../types/types';

export type ProductContextType = {
  product: ProductType[];
  setUrl: (url: string) => void;
  loading: boolean;
};

const ProductContext = createContext({} as ProductContextType);

export default ProductContext;
