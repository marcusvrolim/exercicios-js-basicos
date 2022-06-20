/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function Funcao1(lista, numero){

    let lista2 = [];
    let calculo;

    for(let i = 0; i < lista.length; i++){
        calculo = lista[i] * numero;
        lista2.push(calculo);
    }
    return lista2;
}

function Funcao2(lista, numero){

    let lista2 = [];
    let calculo;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] > 5){
            calculo = lista[i] * numero;
            lista2.push(calculo);
        }
    }
    return lista2;
}

let lista = [1, 5, 6, 7, 10];
console.log(Funcao1(lista, 2));
console.log(Funcao2(lista, 2));