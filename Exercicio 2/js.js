let alturaPedro = 150;//2.3
                        //40
let alturaLucas = 110;//2.3

const crescimentoPedro = 2;

const crescimentoLucas = 3;

let anos = 0;


while (alturaLucas < alturaPedro){
    alturaLucas += crescimentoLucas;
    alturaPedro += crescimentoPedro;
    anos++;
}

document.write(`Precisou de ${anos} para que lucas tenha a mesma altura de pedro. <br>
altura Pedro: ${alturaPedro / 100}m <br>
altura Lucas: ${alturaPedro / 100}m ` )

let altura_Pedro = 1.5; //2.32
                        //41
let altura_Lucas = 1.1;//2.33

const crescimento_Pedro = 0.02;

const crescimento_Lucas = 0.03;

let ano = 0;

while (altura_Lucas < altura_Pedro) {
    ano++;
    altura_Lucas += crescimento_Lucas;
    altura_Pedro += crescimento_Pedro;
}

document.write(`<br> Precisou de ${ano} anos para que Lucas ficasse maior que Pedro. <br>
altura Pedro: ${altura_Pedro.toFixed(2)}m <br>
altura Lucas: ${altura_Lucas.toFixed(2)}m`);
