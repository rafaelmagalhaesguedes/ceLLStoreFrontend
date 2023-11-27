import { createContext } from 'react';
import { ProductType } from '../types/types';

export type ProductContextType = {
  product: ProductType[];
};

const ProductContext = createContext({} as ProductContextType);

export default ProductContext;
