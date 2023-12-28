//@ts-check
(() => {
  // Para especificar el tipo de retorno de una función se coloca : y el tipo de dato
  // que se espera que retorne la función después de los parámetros de la función
  // function sumar(a: number, b: number): number {
  //   return a + b;
  // }
  const calcTotal = (prices: number[]):number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const rta = calcTotal([1, 2, 34, 6, 4, 23])
  console.log(rta);

  // ============ Funciones sin retorno ============
  // Cuando una funcion no tiene un retorno, el tipo sera ------------> V O I D <------------
  const printTotal = (prices: number[]):void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([3,4,3,6]);
})();