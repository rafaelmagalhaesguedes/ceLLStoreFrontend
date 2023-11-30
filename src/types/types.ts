export type ProductType = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition: string;
  available_quantity: number;
  quantity: number;
  attributes: AttributeType[];
  seller: Seller;
  sold_quantity: number;
  shipping: {
    free_shipping: boolean;
  };
};

export type AttributeType = {
  name: string;
  value_name: string;
};

export type SellerReputation = {
  transactions: {
    total: number;
    canceled: number;
    period: string;
    ratings: {
      negative: number;
      positive: number;
      neutral: number;
    };
    completed: number;
  };
  power_seller_status: string;
  metrics: {
    claims: {
      rate: number;
      value: number;
      period: string;
    };
    delayed_handling_time: {
      rate: number;
      value: number;
      period: string;
    };
    sales: {
      period: string;
      completed: number;
    };
  };
  level_id: string;
};

export type Seller = {
  id: number;
  permalink: string;
  registration_date: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  seller_reputation: SellerReputation;
  nickname: string;
};
