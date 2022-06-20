/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function Negativos(lista){
    let negativos = null;
    
    for(i = lista.length; i >= 0; i--){
        if(lista[i] < 0) negativos++
    }

    return `Numeros negativos: ${negativos}`
}

let lista = [-10, -15, -25, 10, 15, 87, 90, 88, -75]
console.log(Negativos(lista));