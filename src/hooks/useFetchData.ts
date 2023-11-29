// useFetchData.ts
import { useCallback, useState } from 'react';
import { ProductType } from '../types/types';

function useFetchData(
  setDataProduct: (products: ProductType[]) => void,
  categorie: string,
) {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categorie}`);
      if (!response.ok) {
        throw new Error('Error fetching data!');
      }
      const data = await response.json();
      setDataProduct(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [categorie, setDataProduct]);

  return { fetchData, loading };
}

export default useFetchData;
