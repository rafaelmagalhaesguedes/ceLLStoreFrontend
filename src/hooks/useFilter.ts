/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import { ProductType } from '../types/types';

type SetProductType = (product: ProductType[]) => void;
type SetLoadingType = (loading: boolean) => void;

function useFilter(
  setProduct: SetProductType,
  product: ProductType[],
  setLoading: SetLoadingType,
) {
  //
  // Filter by string
  const filterByString = useCallback((search: string) => {
    setLoading(true);
    const filtered = product.filter(({ title }) => {
      return title.toLowerCase().includes(search.toLowerCase());
    });
    setProduct(filtered);
    setLoading(false);
  }, []);

  useEffect(() => {
    filterByString('');
  }, [filterByString]);
  //
  // Filter by free shipping
  const filterFreeShipping = () => {
    setLoading(true);
    const filtered = product.filter((item) => item.shipping.free_shipping);
    setProduct(filtered);
    setLoading(false);
    return filtered;
  };
  //
  // Filter by most expensive
  const filterMostExpensive = () => {
    setLoading(true);
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setProduct(sorted);
    setLoading(false);
    return sorted;
  };
  //
  // Filter by cheapest
  const filterCheapest = () => {
    setLoading(true);
    const sorted = [...product].sort((a, b) => a.price - b.price);
    setProduct(sorted);
    setLoading(false);
    return sorted;
  };

  return { filterByString, filterFreeShipping, filterMostExpensive, filterCheapest };
}

export default useFilter;
