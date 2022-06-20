/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function ParImpar(lista){
    let par = 0;
    let impar = 0;

    for(var i = lista.length-1; i >= 0; i--){
        if((lista[i]%2) == 0){
            par++
        }else{
            impar++
        }
    }
    return `Pares: ${par} - Ímpares: ${impar}`
    
}

let lista = [10, 5, 11, 18, 45, 60, 80, 3]

console.log(ParImpar(lista));