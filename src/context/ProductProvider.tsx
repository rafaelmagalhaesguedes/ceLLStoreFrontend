import { ReactNode } from 'react';
import ProductContext from './ProductContext';
import { useFetch } from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';

type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const { product, setProduct, setCategorie, loading, setLoading } = useFetch();
  const {
    filterByString,
    filterFreeShipping,
    filterMostExpensive,
    filterCheapest,
  } = useFilter(setProduct, product, setLoading);

  const contextValue = {
    product,
    setProduct,
    setCategorie,
    filterByString,
    filterFreeShipping,
    filterMostExpensive,
    filterCheapest,
    loading,
    setLoading,
  };

  return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
