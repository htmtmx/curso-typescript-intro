//@ts-check
(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';


  function createProductJson(
    title: string,
    // ============ Comportamieto E X C L U S I V O ============
    // El unico objeto que podemos utilizar como tipo en una variable en Typescript es ------------> Date <------------
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {

    return {
      title,
      createdAt,
      stock,
      size
    };

  }
  const product1 = createProductJson('P1', new Date(), 12, 'S');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);

  // Mas recomendable hacer uso de las ARROW FUNCTIONS

  const createProductJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    // Para poder hacer que ciertos parametros de nuestra funcion sean OPCIONALES
    // podemos hacer uso del signo de interrogacion '?'
    size?: Sizes,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    };
  }

  const product2 = createProductJsonV2('P2',new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);
}) ();