/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function TrocaVetores(vetorA, vetorB){
    console.log(vetorA + " ---- " + vetorB);
    let tamanho = vetorA.length;
    if(vetorA.length == vetorB.length){
        for(let i = 0; i < tamanho; i++){
            vetorA.push(vetorB[i]);
            vetorB.push(vetorA[i]);
        }
        for(let i = 0; i < tamanho; i++){
            vetorA.shift();
            vetorB.shift();
        }
    }
    console.log(vetorA + " ---- " + vetorB);
    
}

let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8 ,9 ,10];

TrocaVetores(vetorA, vetorB);
