//@ts-check
(() => {
  let dynamicVar: any;
  dynamicVar = 100;
  console.log('dynamicVar: ', dynamicVar);
  dynamicVar = true;
  console.log('dynamicVar: ', dynamicVar);
  dynamicVar = {};
  console.log('dynamicVar: ', dynamicVar);
  dynamicVar = [];
  console.log('dynamicVar: ', dynamicVar);
  dynamicVar = () => { };
  console.log('dynamicVar: ', dynamicVar);
  console.log('dynamicVar: ', dynamicVar);
  dynamicVar = 'hello';

  const rta = (dynamicVar as string).toLowerCase();
  console.log('rta: ', rta);

  dynamicVar = 100;
  const rta2 = (<number>dynamicVar).toFixed(2);
  console.log('rta2: ', rta2);
})();