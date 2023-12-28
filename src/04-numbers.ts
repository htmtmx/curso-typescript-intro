(() => {
  let productPrice = 100;
  productPrice = 12.05;
  console.log('productPrice', productPrice);

  let customerAge : number = 25;
  // customerAge = customerAge + '1'; == 251
  customerAge = customerAge + 1; // == 26

  let productsInStock: number;
  productsInStock = 3;
  console.log("productsInStock", productsInStock);
  if (productsInStock > 10) {
    console.log("We have enough products");
  }
  let discount = parseInt("123");
    console.log("discount", discount);

    let hex: number = 0xf00d;
    console.log("hex", hex);

    let binary: number = 0b1010;
    console.log("binary", binary);
})();