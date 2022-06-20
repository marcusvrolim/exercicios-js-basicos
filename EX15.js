/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

function Compra(modelo){

    let mensagem;
    switch(modelo){
        case "hatch":
            mensagem = "Compra efetuada com sucesso"
        break;
        case "sedan":
            mensagem = "Tem certeza que não prefere este modelo?"
        break;
        case "motocicleta":
            mensagem = "Tem certeza que não prefere este modelo?"
        break;
        case "caminhonete":
            mensagem = "Tem certeza que não prefere este modelo?"
        break;
        default:
            mensagem = "Não trabalhamos com este tipo de automóvel aqui"
        break;
    }
    return mensagem;
}

console.log(Compra('hatch'));
console.log(Compra('sedan'));
console.log(Compra('motocicleta'));
console.log(Compra('caminhonete'));
console.log(Compra('conversivel'));
