let numero = prompt("digite um numero para pegar a tabuada");

let multiplicadorDaTabuada = prompt("digite até onde quer multiplicar");

let tabuada = 0

for (multiplicadorDaTabuada ; tabuada <= multiplicadorDaTabuada ; tabuada++ ){
    let resultado = numero * tabuada;
    console.log(`${numero} x ${tabuada} = ${resultado}`);
}