/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInteiro = [10, 20, 30, 40];
let vetorString = ["Nome", "CPF", "Endereco", "Bairro"];
let vetorDouble = [1.10, 1.20, 1.30, 1.40];

let todos = vetorInteiro.concat(vetorString, vetorDouble);

console.log(todos);
console.log(vetorInteiro + ", " + vetorString + ", " + vetorDouble);