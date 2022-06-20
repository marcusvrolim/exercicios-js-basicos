/*
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function Intervalo(lista){

    let dentro = 0;
    let fora = 0;

    for(i = lista.length-1; i >= 0; i--){
        if((lista[i] >= 10) && (lista[i] <= 20)) dentro++
        else fora++
    }
    return `Dentro: ${dentro} - Fora: ${fora}`

}

let lista = [5, 6, 10, 15, 17, 20, 25, 30]
console.log(Intervalo(lista));