//@ts-check
(() => {
  type UserId = string | number; // Alias type
  // Alias type nos permite definir un "tipo" de dato de acuerdo a nuestras necesidades
  // En este caso si nuestro proyecto requiere que el tipo del ID del usuario puede ser tanto
  // string como number, podemos definir el alias type de UserId con el tipo o los tipos requeridos
  // Al hacer esto contribuimos al equipo de desarrollo y al proyecto en si a ser mas mantenible
  // Ya que no debemos cambiar los tipos de userId en cada fragmento de codigo donde se utilice
  // tan solo con usar el alias y modficar este mismo donde lo declaramos bastara para que los
  // cambios surgan efecto y sea mas rapido
  let userId: UserId;

  // Literal types
  // Con los tipos literales definimos de manera finita
  // el tipo de datos especifico que requerimos

  type ShirtsSizes = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: ShirtsSizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';


  function greeting(userId: UserId, shirtSize: ShirtsSizes) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    } else {
      console.log(`number: ${userId}`);
    }
  }

  greeting('hola soy un string', "M")
  greeting(69, 'XL')




})();