
function indicacaoBisexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log(indicacaoBisexto(2020));  
console.log(indicacaoBisexto(1900));  
console.log(indicacaoBisexto(2000)); 