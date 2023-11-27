import { useEffect, useState, useCallback } from 'react';
import { ProductType } from '../types/types';

export function useFetchProduct() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('MLB1051');

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${url}`);
      if (!response.ok) {
        throw new Error('Error fetching data!');
      }
      const data = await response.json();
      setProduct(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);

  return { product, setUrl, loading };
}
