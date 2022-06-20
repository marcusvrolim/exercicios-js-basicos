/*
* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function Elevado(base, expoente){
    let result = Math.pow(base, expoente);
    return result;
}

console.log(Elevado(2,3));
