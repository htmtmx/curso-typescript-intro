// Para hacer uso de librerias no soportadas por typescript
// se debe instalar el paquete de la libreria y el paquete de tipos
// npm i package-name
// npm i --save-dev @types/package-name
import _ from 'lodash';

const data = [
  {
    username: 'admin',
    role: 'admin',
  },
  {
    username: 'user1',
    role: 'seller',
  },
  {
    username: 'user2',
    role: 'seller',
  },
  {
    username: 'user3',
    role: 'buyer',
  }
];
const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
