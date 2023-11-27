import { ReactNode } from 'react';
import ProductContext from './ProductContext';
import { useFetchProduct } from '../hooks/useFetchProduct';

type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const { product, setUrl, loading } = useFetchProduct();

  const contextValue = {
    product,
    setUrl,
    loading,
  };

  return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
