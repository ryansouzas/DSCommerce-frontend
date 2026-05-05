import type { CategoryDTO } from "./category";

export type ProductDto = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: CategoryDTO[];
};
