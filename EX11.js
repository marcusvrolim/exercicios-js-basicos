/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function AnoBi(ano){
    if((ano % 4) == 0) return true;
    return false;
}

console.log(AnoBi(2022));
console.log(AnoBi(2021));
console.log(AnoBi(2020));
console.log(AnoBi(2019));
console.log(AnoBi(2018));
console.log(AnoBi(2017));
console.log(AnoBi(2016));
console.log(AnoBi(2015));
