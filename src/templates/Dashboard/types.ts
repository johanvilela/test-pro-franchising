export type IngredientsProps = {
  id: number;
  cost: number;
  name: string;
  quantity: number;
};

export type ProductsProps = {
  id: number;
  image: string;
  ingredients: IngredientsProps[];
  cost: number;
  name: string;
  quantity: number;
  price: number;
};
