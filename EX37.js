/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function ProgAritmetica(numeroTermo, primeiroTermo, razao){
    let i = 1;
    let resultado = primeiroTermo;
    console.log("PROGRESSÃO ARITMÉTICA");
    console.log(primeiroTermo);
    while(i <= numeroTermo-1){
        resultado += razao;
        i++
        console.log(resultado)
    }
}

function ProgGeometrica(numeroTermo, primeiroTermo, razao){
    let i = 1;
    let resultado = primeiroTermo;
    console.log("PROGRESSÃO GEOMÉTRICA");
    console.log(primeiroTermo);
    while(i <= numeroTermo-1){
        resultado *= razao;
        i++
        console.log(resultado)
    }
}

ProgAritmetica(10, 1, 3);
ProgGeometrica(10, 1, 3);