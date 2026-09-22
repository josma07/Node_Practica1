import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const codigo = await rl.question('¿Cuál es el codigo? ');

function desactivarBomba(codigo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (codigo === "1234") {
        resolve("¡Bomba desactivada con éxito! ");
      } else {
        reject("¡Código incorrecto!  Boooom");
      }
    }, 2000);
  });
}


desactivarBomba(codigo)
  .then((mensaje) => console.log(mensaje))

  rl.close();