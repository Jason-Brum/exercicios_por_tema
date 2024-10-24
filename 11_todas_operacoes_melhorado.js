const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro numero: "))
let n2 = parseInt(prompt("Digite o segundo número: "))

if (isNaN(n1) || isNaN(n2)) {
    console.log("Insira núemros válidos: ");
} else {
    let soma = n1 + n2;
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = (n2 !== 0) ? (n1 / n2): "Não é possível dividir por zero"

    console.log(`A soma dos dois números é ${soma}, já o resultado da subtração é ${subtracao}, para a multiplicação o resultado é ${multiplicacao} e o da divisão é ${divisao}`)
}





