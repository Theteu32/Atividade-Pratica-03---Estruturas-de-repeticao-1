
document.write("Contagem: ")

for (let i = 30; i >= 16; i--){
    let primo = true
    for (let j = 2; j < i; j++){
        if (i % j === 0 ){
            primo = false;  
            break;
        }
    }
    if (primo) {
        document.write(`[${i}] `);
    } else {
        document.write(`${i} `);
    }
}
document.write("...");
