/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function DitadoNumero(numero){

    let mensagem;

    switch(numero){
        case 1:
            mensagem = "Um"
        break;
        case 2:
            mensagem = "Dois"
        break;
        case 3:
            mensagem = "Três"
        break;
        case 4:
            mensagem = "Quatro"
        break;
        case 5:
            mensagem = "Cinco"
        break;
        case 6:
            mensagem = "Seis"
        break;
        case 7:
            mensagem = "Sete"
        break;
        case 8:
            mensagem = "Oito"
        break;
        case 9:
            mensagem = "Nove"
        break;
        case 10:
            mensagem = "Dez"
        break;
        default:
            mensagem = "Número fora do intervalo."
        break;
    }

    return mensagem;
}

console.log(DitadoNumero(1));
console.log(DitadoNumero(2));
console.log(DitadoNumero(3));
console.log(DitadoNumero(4));
console.log(DitadoNumero(5));
console.log(DitadoNumero(6));
console.log(DitadoNumero(7));
console.log(DitadoNumero(8));
console.log(DitadoNumero(9));
console.log(DitadoNumero(10));
console.log(DitadoNumero(11));