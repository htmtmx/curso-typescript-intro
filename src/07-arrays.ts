(() => {
  let prices = [100, 200, 300, '', true];
  prices.push(400);
  console.log('prices: ', prices);

  let arrayExplicitMixed: (number | string | boolean | Object)[] = ["hello", 1, true];
  arrayExplicitMixed.push(2);
  arrayExplicitMixed.push(false);
  arrayExplicitMixed.push("world");
  console.log('arrayExplicitMixed: ', arrayExplicitMixed);
  arrayExplicitMixed.push({});
  arrayExplicitMixed.push([]);

  let numbers = [100, 200, 300];
  numbers.map(item => item * 2);
})();