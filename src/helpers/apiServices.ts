const BASE_URL = 'https://api.mercadolibre.com';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data!');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function fetchProduct() {
  return fetchData(`${BASE_URL}/sites/MLB/categories/MLB1051`);
}
