import { ReactNode } from 'react';
import { useFetchProduct } from '../hooks/useFetchProduct';
import ProductContext from './ProductContext';

type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const { product } = useFetchProduct();

  const contextValue = {
    product,
  };

  return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
