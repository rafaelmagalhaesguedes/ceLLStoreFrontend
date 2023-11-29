// useFilterByString.ts
import { useCallback } from 'react';
import { ProductType } from '../types/types';

export function useFilterByString(product: ProductType[], setProduct: any) {
  const filterByString = useCallback((search: string) => {
    const filtered = product.filter(({ title }) => {
      return title.toLowerCase().includes(search.toLowerCase());
    });
    setProduct(filtered);
  }, [product, setProduct]);

  return { filterByString };
}
