import Product from './Products';
export default interface  ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }