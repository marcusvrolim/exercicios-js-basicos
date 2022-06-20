/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function Conceito(nota){
    let conceito; 
    
    for(let i = 0; i < nota.length; i++){
        if((nota[i] >= 0) && (nota[i] <= 4.9)) conceito = "D";
        if((nota[i] >= 5) && (nota[i] <= 6.9)) conceito = "C";
        if((nota[i] >= 7) && (nota[i] <= 8.9)) conceito = "B";
        if((nota[i] >= 9) && (nota[i] <= 10.0)) conceito = "A";
        if((nota[i] < 0) || (nota[i] > 10.0)) conceito = "Nota inválida";
        
        console.log(`Nota: ${nota[i]} - Conceito: ${conceito}`); 
    }
}

let nota = [1.1, 4.9, 5.0, 6.0, 6.9, 7.5, 8.8, 9.0, 9.5, 10, 20]

Conceito(nota);