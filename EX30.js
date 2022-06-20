/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function MaiorMenor(lista){
    let maior = lista[0];
    let menor = lista[0];
    for(i = lista.length; i >= 0; i--){
        if(lista[i] > maior) maior = lista[i];
        if(lista[i] < menor) menor = lista[i];
    }
    return `Maior: ${maior} - Menor: ${menor}`
}

let lista = [1, 5, 10, 50, 15, 3, 80, 150, 2];
console.log(MaiorMenor(lista));