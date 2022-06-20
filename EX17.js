/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function CalculoSalario(plano, salarioAtual){

    let salarioNovo;

    switch(plano){
        case "A":
            salarioNovo = salarioAtual + (salarioAtual * 0.10);
            salarioNovo;
        break;
        case "B":
            salarioNovo = salarioAtual + (salarioAtual * 0.15);
            salarioNovo;
        break;
        case "C":
            salarioNovo = salarioAtual + (salarioAtual * 0.20);
            salarioNovo;
        break;
        default:
            salarioNovo = "Plano Inválido"
        break;
    }
    
    return salarioNovo;
}

console.log(CalculoSalario("A", 1000));
console.log(CalculoSalario("B", 1000));
console.log(CalculoSalario("C", 1000));
console.log(CalculoSalario("D", 1000));

