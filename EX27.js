/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function Crescimento(lista){

    altura1 = lista[0].altura;
    taxaCrescimentoAnual1 = lista[0].taxaCrescimentoAnual;
    altura2 = lista[1].altura;
    taxaCrescimentoAnual2 = lista[1].taxaCrescimentoAnual;

    menor = altura1;
    taxaDaMenor = taxaCrescimentoAnual1;
    if(menor >= altura2){
        menor = altura2;
        taxaDaMenor = taxaCrescimentoAnual2;
    } 
    maior = altura1;
    taxaDaMaior = taxaCrescimentoAnual1;
    if(maior <= altura2){
        maior = altura2;
        taxaDaMenor = taxaCrescimentoAnual2;
    } 

    let ano = 1;
    while((menor < maior) || (ano == 80) ){
        menor = menor + (menor * taxaDaMenor * ano); 
        maior = maior + (maior * taxaDaMaior * ano);
        ano++;
    }
    return `A menor altura ${menor.toFixed(2)} com taxa de crescimento anual de ${taxaDaMenor.toFixed(2)} ultrapassará a altura da maior em ${ano} anos`
}

let lista = [{altura: 1.50, taxaCrescimentoAnual: 0.05}, {altura: 1.30, taxaCrescimentoAnual: 0.07}]
console.log(Crescimento(lista))