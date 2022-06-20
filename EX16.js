/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function CalculadoraBasica(numero1, numero2, sinal){

    let resultado ;

    switch(sinal){

        case "+":
            resultado = numero1 + numero2
        break;
        case "-":
            resultado = numero1 - numero2
        break;
        case "*":
            resultado = numero1 * numero2
        break;
        case "/":
            resultado = numero1 / numero2
        break;
        default:
            resultado = "Operação inválida"
        break;
    }
    return resultado;
}

console.log(CalculadoraBasica(1,2,"+"));
console.log(CalculadoraBasica(3,2,"-"));
console.log(CalculadoraBasica(5,5,"*"));
console.log(CalculadoraBasica(6,2,"/"));
console.log(CalculadoraBasica(1,2,"%"));


