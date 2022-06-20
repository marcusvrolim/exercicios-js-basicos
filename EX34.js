/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function Strings(string1, string2){
    let situacao;

    for(var i = 0; i < string1.length; i++){
        stringLista1 = string1.toUpperCase().charAt(i);
        for(var j = 0; j < string2.length; j++){
            stringLista2 = string2.toUpperCase().charAt(j);
            if(stringLista1 == stringLista2){
                situacao = true;
                break      
            }else{
                situacao = false;
            }
        }
        if(situacao == false)
        return situacao;
    }
    return situacao;
}

let string1 = "teclado mouse monitor"
let string2 = "MONITOR MOUSE TECLADO"
let string3 = "celular carteira"
let string4 = "CELULAR"

console.log(Strings(string1, string2));
console.log(Strings(string3, string4));



































