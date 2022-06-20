/*
* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
*     multiplicação e divisão desses valores.
*/

let valor1 = 10;
let valor2 = 2;

function calcular(valor1, valor2){
    console.log(soma(valor1, valor2));
    console.log(subtracao(valor1, valor2));
    console.log(multiplicacao(valor1, valor2));
    console.log(divisao(valor1, valor2));
}

function soma(valor1, valor2){
    return "Soma: " + (valor1 + valor2);
}

function subtracao(valor1, valor2){
    return "Subtracao: " + (valor1 - valor2);
}

function multiplicacao(valor1, valor2){
    return "Multiplicacao: " + (valor1 * valor2);
}

function divisao(valor1, valor2){
    return "Divisao: " + (valor1 / valor2);
}

calcular(valor1, valor2);

