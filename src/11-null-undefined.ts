//@ts-check
(() => {

  // ================================== N O T A ==================================
  // Las siguientes declaraciones de variables con asignacion null o undefined no es aplicable
  // ya que se rompe el tipado declarado previo a la asignacion.

  // let myNumber: number = null;
  // let myString: string = undefined;
  // ================================== N O T A ==================================

  let myNull: null = null;
  let myUndefined = undefined;
  console.log(myNull);

  let myNumber: number | null = null;
  myNumber = 23;

  let myString: string | null = null;
  myString = 'hello';

  function hi(name: string | null) {
    let hello: string = 'Hola ';
    // hello +=  name ? name : 'No es un string';
    hello +=  name?.toLowerCase() || 'No es un string';
    console.log(hello);
  }
  hi('Cesar');
  hi(null);
})();