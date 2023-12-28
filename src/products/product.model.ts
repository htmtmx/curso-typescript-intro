//@ts-check
export type Sizes = 'S' | 'M' | 'L' | 'Xl' | 'XXL';

export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
}