import { ProductType } from '../types/types';

function useFilter(product: ProductType[], setProduct: (product: ProductType[]) => void) {
  //
  // Filter by free shipping
  const filterFreeShipping = () => {
    const filtered = product.filter((item) => item.shipping.free_shipping);
    setProduct(filtered);
    return filtered;
  };
  //
  // Filter by most expensive
  const filterMostExpensive = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setProduct(sorted);
    return sorted;
  };
  //
  // Filter by cheapest
  const filterCheapest = () => {
    const sorted = [...product].sort((a, b) => a.price - b.price);
    setProduct(sorted);
    return sorted;
  };

  return { filterFreeShipping, filterMostExpensive, filterCheapest };
}

export default useFilter;
