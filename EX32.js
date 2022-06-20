/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

let lista = [10, 15, 28, 60, 32, 25, 40, 82, 10, 100];
let soma = 0;
let media = 0;

for(i = lista.length-1; i >= 0; i--){
    soma = soma + lista[i];
}
 media = soma / (lista.length);

 console.log(soma);
 console.log(lista.length);
 console.log(media);