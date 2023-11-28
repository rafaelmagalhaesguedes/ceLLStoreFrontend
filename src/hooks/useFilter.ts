/* eslint-disable react-hooks/exhaustive-deps */
import { ProductType } from '../types/types';

type SetProductType = any;
type SetLoadingType = (loading: boolean) => void;

function useFilter(
  setProduct: SetProductType,
  product: ProductType[],
  setLoading: SetLoadingType,
) {
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

  return { filterFreeShipping, filterMostExpensive, filterCheapest };
}

export default useFilter;
