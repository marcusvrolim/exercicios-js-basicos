/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

X = (-b +- RAIZ(b^2 - 4ac))/2a
*/

function Baskhara(a, b, c){
    result1 = (-b + Math.sqrt((Math.pow(b,2)) - (4 * a * c ))) / (2 * a);
    result2 = (-b - Math.sqrt((Math.pow(b,2)) - (4 * a * c ))) / (2 * a);
    return `x1 = ${result1} e x2 = ${result2}`
}

console.log(Baskhara(2, 5, 3))
