let num = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite mais um número: "));
let num3 = parseFloat(prompt("Digite mais um número: "));
let num4 = parseFloat(prompt("Digite mais um número: ")) ;
let num5 = parseFloat(prompt("Digite mais um número: ")) ;
let num6 = parseFloat(prompt("Digite mais um número: "));
let num7 = parseFloat(prompt("Digite mais um número: ")) ;
let num8 = parseFloat(prompt("Digite mais um número: ")) ;
let num9 = parseFloat(prompt("Digite mais um número: ")) ;
let num1 = parseFloat(prompt("Digite um ultimo número: "));

let media = (num + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num1) / 10;

let contadorPositivo = 0;
let contadorNegativo = 0;

if (num < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num2 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num3 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num4 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num5 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num6 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num7 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num8 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num9 < 0){
    contadorNegativo++
}else{contadorPositivo++};
if (num1 < 0){
    contadorNegativo++
}else{contadorPositivo++};

let poncentagemPositivos = (contadorPositivo * 100) / 10;
let poncentagemNegativos = (contadorNegativo * 100) / 10;


document.write(`Os numeros digitados foram: ${num}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}, ${num7}, ${num8}, ${num9}, ${num} <br>`);

document.write(`A média dos numeros digitados foi: ${media} <br>
Foram digitados ${contadorPositivo} números positvos que representam ${poncentagemPositivos}% dos números digitados <br>
Foram digitados ${contadorNegativo} números negativos que representam ${poncentagemNegativos}% dos números digitados`);