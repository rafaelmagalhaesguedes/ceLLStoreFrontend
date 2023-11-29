// ProductProvider.tsx
import { ReactNode, useEffect, useState } from 'react';
import ProductContext from './ProductContext';
import { ProductType } from '../types/types';
import useFilter from '../hooks/useFilter';
import { useFilterByString } from '../hooks/useFilterByString';
import useFetchData from '../hooks/useFetchData';

type ProductProviderProps = {
  children: ReactNode;
};

function ProductProvider({ children }: ProductProviderProps) {
  const [dataProduct, setDataProduct] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [categorie, setCategorie] = useState<string>('MLB1051');

  const { fetchData, loading } = useFetchData(setDataProduct, categorie);
  const { filterByString } = useFilterByString(dataProduct, setProduct);
  const {
    filterCheapest,
    filterMostExpensive,
    filterFreeShipping } = useFilter(dataProduct, setProduct);

  useEffect(() => {
    fetchData();
  }, [fetchData, categorie]);

  useEffect(() => {
    setProduct(dataProduct);
  }, [dataProduct]);

  const contextValue = {
    dataProduct,
    product,
    loading,
    setProduct,
    setCategorie,
    filterByString,
    filterCheapest,
    filterMostExpensive,
    filterFreeShipping,
  };

  return (
    <ProductContext.Provider value={ contextValue }>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
