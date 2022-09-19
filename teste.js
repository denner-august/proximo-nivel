console.clear();

const numeros = [];
function gerar() {
  for (let index = 1; index <= 30; index++) {
    numeros.push(index);
  }
}

gerar();
console.log(numeros);
