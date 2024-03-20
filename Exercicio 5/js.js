let numero = parseFloat(prompt("digite um numero para iniciar uma contagem ate ele: "))

if (numero <= 0){
    document.write("digite um numero válido")
}
document.write("Contagem: ")
for (let i = 0; i <= numero; i++){
    document.write(`${i}, `)
}
document.write("Fim!!!");
