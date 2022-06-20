/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores
*/

function DivisaoEResto(valor1, valor2){

    result = valor1 / valor2;
    resto = valor1 % valor2;

    return `Resultado da divisão é ${result} e o com resto de ${resto}`;
}

console.log(DivisaoEResto(10,3));