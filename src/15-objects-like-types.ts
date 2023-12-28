//@ts-check
(() => {
  type Sizes = 'S' | 'M' | 'L' | 'Xl' | 'XXL';

  // Creamos un objeto como tipo para poder reutilizarlo
  // Ya que en la funcion addProduct recibe como parametro un objeto
  // en el cual declarabamos los parametros que requeria junto con el tipo de dato

  // const addProduct = (data: {
  //   title: string,
  //     createdAt: Date,
  //       stock: number,
  //         size ?: Sizes,
  //   }) => {
  //   products.push(data);
  // }

  // Podemos crear un tipo de dato que sea un objeto
  // Y asi reutilizarlo en la funcion addProduct
  // y en el array de productos
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }

  // Podemos crear un array de objetos con el tipo de dato
  const products: Product[] = [];

  products.push({
    title: 'Product 3',
    createdAt: new Date(),
    stock: 7,
    size: 'S'
  })
  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 42
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(),
    stock: 21,
    size: 'S'
  });

  console.log(products);
})();