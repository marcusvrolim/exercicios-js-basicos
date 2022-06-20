/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function CalculoMedia(diarioClasse){

    let media, situacao;

    for(var i = (diarioClasse.length-1) ; i >= 0; i--){

        codigo = diarioClasse[i].codigo;
        nota1 = diarioClasse[i].nota1;
        nota2 = diarioClasse[i].nota2;
        nota3 = diarioClasse[i].nota3;

        if((nota1 > nota2) && (nota1 > nota3)){
            media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3))/10;
        }else if((nota2 > nota1) && (nota2 > nota3)){
            media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3))/10;
        }else if((nota3 > nota2) && (nota3 > nota1)){
            media = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3))/10;
        }
        if(media >= 5){
            situacao = "APROVADO" 
        }else{
            situacao = "REPROVADO"
        } 
        console.log(`Código: ${codigo} - Nota 1: ${nota1} - Nota 2: ${nota2} - Nota 3: ${nota3} - Média: ${media} - Situacao: ${situacao}`);
    }
}

let diarioClasse = [{codigo: 1, nota1: 9, nota2: 6, nota3: 7}, {codigo: 2, nota1: 8, nota2: 4, nota3: 3}, {codigo: 3, nota1: 2, nota2: 4, nota3: 3}, {codigo: 4, nota1: 8, nota2: 7, nota3: 6}]
CalculoMedia(diarioClasse);