import { useEffect, useState, useCallback } from 'react';
import { ProductType } from '../types/types';

export function useFetch() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [categorie, setCategorie] = useState<string>('MLB1051');

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categorie}`);
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
  }, [categorie]);

  useEffect(() => {
    fetchData();
  }, [fetchData, categorie]);

  return { product, setProduct, setCategorie, loading, setLoading };
}
