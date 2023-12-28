//@ts-check
import { products, addProduct, calcStock } from "./product.service";

addProduct({
  name: 'Product 1',
  createdAt: new Date(),
  stock: 4,
  size: 'S'
})
addProduct({
  name: 'Product 2',
  createdAt: new Date(),
  stock: 67,
  size: 'L'
})

const total = calcStock();

console.log(products);
console.log(`Total units in stock: ${total}`);