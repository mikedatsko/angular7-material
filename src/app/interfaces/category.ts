import { Product } from './product';

export interface Category {
  id: string;
  categoryName: string;
  iconName: string;
  products: Product[];
}
