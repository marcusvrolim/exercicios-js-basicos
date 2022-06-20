/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function TipoDia(dia){
    let tipoDia;
    switch(dia){
        case 1:
            tipoDia = "Fim de semana"
        break;
        case 2:
            tipoDia = "Dia útil"
        break;
        case 3:
            tipoDia = "Dia útil";
        break;
        case 4:
            tipoDia = "Dia útil";
        break;
        case 5:
            tipoDia = "Dia útil";
        break;
        case 6:
            tipoDia = "Dia útil";
        break;
        case 7:
            tipoDia = "Fim de semana";
        break;
        default:
            tipoDia = "Dia inválido";
        break;
    }
    return tipoDia;
}

console.log(TipoDia(1));
console.log(TipoDia(3));
console.log(TipoDia(4));
console.log(TipoDia(7));



