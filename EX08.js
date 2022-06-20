/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/

function HistoricoJogos(listaPontuacao){

     let listaPontuacaoArray = listaPontuacao.split(" ");
     let record = listaPontuacaoArray[1];
     let menor = listaPontuacaoArray[0];
     let contadorRecord = -1;
     let jogoLixo = 0;
    for(var i = 0; i <= 8; i++){
        if(record < listaPontuacaoArray[i+1]) contadorRecord++;
        else if(menor < listaPontuacaoArray[i]) jogoLixo = i+1;
    }
    return `Vezes que bateu o record: ${contadorRecord} - Jogo com pontuação menor: ${jogoLixo}`
}

console.log(HistoricoJogos("10 20 30 40 50 60 60 5"));