import data from '@/data/shops.json';

export type ShopCategory = 'restaurants' | 'retail' | 'services';

export type Shop = {
  id: string;
  name: string;
  logo: string;
  address: string;
  website?: string;
  phone?: string;
  category: ShopCategory;
};

export const shops = data.shops as Shop[];
