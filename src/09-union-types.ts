//@ts-check
(() => {
  let userId: string | number;
  userId = 1;
  userId = "sklkala";

  function gretting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(myText.toLocaleLowerCase());
    } else {
      console.log(myText.toFixed(2));
    }
  }
  gretting(1);
  gretting("sklkala");

})();