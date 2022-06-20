/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function ContadorCedulas(valor){

    let cedula100 = 0;
    let cedula50 = 0;
    let cedula10 = 0;
    let cedula5 = 0;
    let cedula1 = 0;

    if(valor >= 100){
        cedula100 = valor/100;
        cedula100 = Math.trunc(cedula100);
        valor = valor - (cedula100 * 100);
    }
    if(valor >= 50){
        cedula50 = valor/50;
        cedula50 = Math.trunc(cedula50);
        valor = valor - (cedula50 * 50);
    }
    if(valor >= 10){
        cedula10 = valor/10;
        cedula10 = Math.trunc(cedula10);
        valor = valor - (cedula10 * 10)
    }
    if(valor >= 5){
        cedula5 = valor/5;
        cedula5 = Math.trunc(cedula5);
        valor = valor - (cedula5 * 5);
    }
    if(valor >= 1){
        cedula1 = valor/1;
        cedula1 = Math.trunc(cedula1);
        valor = valor - (cedula1 * 1)
    }

    return `Cedula 100: ${cedula100}, Cedula 50: ${cedula50}, Cedula 10: ${cedula10}, Cedula 5: ${cedula5}, Cedula 1: ${cedula1}`
}

console.log(ContadorCedulas(357));
console.log(ContadorCedulas(152));
console.log(ContadorCedulas(521));
console.log(ContadorCedulas(1000));
console.log(ContadorCedulas(50));
console.log(ContadorCedulas(23));
console.log(ContadorCedulas(457));

