import { useEffect, useState } from 'react';
import { ProductType } from '../types/types';

export function useFetchProduct() {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1051');
        if (!response.ok) {
          throw new Error('Error fetching data!');
        }
        const data = await response.json();
        setProduct(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return { product };
}
