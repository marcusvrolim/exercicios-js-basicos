/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

JUROS SIMPLES => J = C x i x t
JUROS COMPOSTOS => M = C X (1 + i)^n
*/

function JuroSimples(capitalInicial, taxaJuros, tempo){

    result = capitalInicial * taxaJuros * tempo;
    return result;
}

function JuroComposto(capitalInicial, taxaJuros, tempo){
    
    result = capitalInicial * Math.pow((1 + taxaJuros), tempo);
    return result;
}

console.log(JuroSimples(1000, 10, 1));
console.log(JuroComposto(1000, 10, 1));
