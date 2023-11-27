export type ProductType = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition: string;
  available_quantity: number;
  seller: {
    nickname: string;
  };
  shipping: {
    free_shipping: boolean;
  };
};
