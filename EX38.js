/*
38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function Impares(inicio, fim){
    
    let numero = inicio;
    let listaNumero = [];
    if(inicio < fim){
        for(let i = inicio; i <= fim; i++){
            if((numero%2) != 0){
                listaNumero.push(numero);
            }
            numero++;
        }
        return listaNumero;
    }else{
        return "Inicio tem que ser menor que fim"
    }
}

console.log(Impares(0,100));
console.log(Impares(100,0));