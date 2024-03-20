let altura1 = parseFloat(prompt("Digite a altura da primeira pessoa: "));
let altura2 = parseFloat(prompt("Digite a altura da segunda pessoa: "));
let altura3 = parseFloat(prompt("Digite a altura da terceira pessoa: "));
let altura4 = parseFloat(prompt("Digite a altura da quarta pessoa: "));
let altura5 = parseFloat(prompt("Digite a altura da quinta pessoa: "));
let altura6 = parseFloat(prompt("Digite a altura da sexta pessoa: "));
let altura7 = parseFloat(prompt("Digite a altura da sétima pessoa: "));
let altura8 = parseFloat(prompt("Digite a altura da oitava pessoa: "));
let altura9 = parseFloat(prompt("Digite a altura da nona pessoa: "));
let altura10 = parseFloat(prompt("Digite a altura da décima pessoa: "));
let altura11 = parseFloat(prompt("Digite a altura da décima primeira pessoa: "));
let altura12 = parseFloat(prompt("Digite a altura da décima segunda pessoa: "));
let altura13 = parseFloat(prompt("Digite a altura da décima terceira pessoa: "));
let altura14 = parseFloat(prompt("Digite a altura da décima quarta pessoa: "));
let altura15 = parseFloat(prompt("Digite a altura da décima quinta pessoa: "));

let menorAltura = altura1;
let maiorAltura = altura1;

if (altura2 < menorAltura) menorAltura = altura2;
if (altura2 > maiorAltura) maiorAltura = altura2;

if (altura3 < menorAltura) menorAltura = altura3;
if (altura3 > maiorAltura) maiorAltura = altura3;

if (altura4 < menorAltura) menorAltura = altura4;
if (altura4 > maiorAltura) maiorAltura = altura4;

if (altura5 < menorAltura) menorAltura = altura5;
if (altura5 > maiorAltura) maiorAltura = altura5;

if (altura6 < menorAltura) menorAltura = altura6;
if (altura6 > maiorAltura) maiorAltura = altura6;

if (altura7 < menorAltura) menorAltura = altura7;
if (altura7 > maiorAltura) maiorAltura = altura7;

if (altura8 < menorAltura) menorAltura = altura8;
if (altura8 > maiorAltura) maiorAltura = altura8;

if (altura9 < menorAltura) menorAltura = altura9;
if (altura9 > maiorAltura) maiorAltura = altura9;

if (altura10 < menorAltura) menorAltura = altura10;
if (altura10 > maiorAltura) maiorAltura = altura10;

if (altura11 < menorAltura) menorAltura = altura11;
if (altura11 > maiorAltura) maiorAltura = altura11;

if (altura12 < menorAltura) menorAltura = altura12;
if (altura12 > maiorAltura) maiorAltura = altura12;

if (altura13 < menorAltura) menorAltura = altura13;
if (altura13 > maiorAltura) maiorAltura = altura13;

if (altura14 < menorAltura) menorAltura = altura14;
if (altura14 > maiorAltura) maiorAltura = altura14;

if (altura15 < menorAltura) menorAltura = altura15;
if (altura15 > maiorAltura) maiorAltura = altura15;

document.write("A menor altura do grupo é: " + menorAltura + " metros <br> ");
document.write("A maior altura do grupo é: " + maiorAltura + " metros");