//@ts-check
(() => {
  // En este caso creamos una funcion que recibe un objeto como parametro
  // el cual puede estar constituido por email, password e incluso mas.
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);

  }

  login({
    email: 'chanchito@feliz.com',
    password: '8d7xchjdsa'
  });


  type Sizes = 'S' | 'M' | 'L' | 'Xl' | 'XXL';

  const products:any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
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