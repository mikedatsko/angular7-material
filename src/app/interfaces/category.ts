import { Product } from './product';

export interface Category {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}
