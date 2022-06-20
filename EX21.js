/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function Convenio(idade){

    let valor = 100;
    let total;

    if(idade < 10){
        total = valor + 80;        
        return total;
    }else if(idade >= 10 && idade <= 30){
        total = valor + 50;
        return total;
    }else if(idade > 30 && idade <= 60){
        total = valor + 95;
        return total;
    }else if(idade > 60){
        total = valor + 130;
        return total;
    }    
}

console.log(Convenio(9));
console.log(Convenio(10));
console.log(Convenio(25));
console.log(Convenio(35));
console.log(Convenio(60));
console.log(Convenio(61));
console.log(Convenio(91));


