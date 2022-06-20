/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function Anuidade(mes, anuidade){

    let valorAtualizado = 0;

    valorAtualizado = anuidade * Math.pow((1 + 0.05), (mes-1));

    return valorAtualizado;

}

console.log(Anuidade(1, 100));
console.log(Anuidade(2, 100));
console.log(Anuidade(3, 100));
console.log(Anuidade(4, 100));
console.log(Anuidade(5, 100));
console.log(Anuidade(6, 100));
console.log(Anuidade(7, 100));
console.log(Anuidade(8, 100));
console.log(Anuidade(9, 100));
console.log(Anuidade(10, 100));
console.log(Anuidade(11, 100));
console.log(Anuidade(12, 100));

