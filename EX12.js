/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function Fatorial(numero){

    result = numero;

    for(var i = 1; numero > i; i++){
        result = i * result;
    }
    return result;
}

console.log(Fatorial(9));