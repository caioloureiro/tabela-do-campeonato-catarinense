//Start - LINKS IMPORTANTES
/*
http://egol.fcf.com.br/sesp/WsEgol.wso
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_GoleiroMenosVazado/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Sumula/JSON/debug?iAno=2019&iCampeonato=292&iJogo=3
Ai é só clicar no metodo e vai abrir uma tela assim, informe o ano e campeonato e clique em Click Here para ter o link do json

https://caioloureiro.orgfree.com/fcf
*/
//End - LINKS IMPORTANTES

//Start - Variáveis
var options, eixo_x,
posicao01, posicao02, posicao03, posicao04, posicao05, posicao06, posicao07, posicao08, posicao09, posicao10,
posicao11, posicao12, posicao13, posicao14, posicao15, posicao16, posicao17, posicao18, posicao19, posicao20,
grafico_posicao01, grafico_posicao02, grafico_posicao03, grafico_posicao04, grafico_posicao05,
grafico_posicao06, grafico_posicao07, grafico_posicao08, grafico_posicao09, grafico_posicao10,
grafico_posicao11, grafico_posicao12, grafico_posicao13, grafico_posicao14, grafico_posicao15,
grafico_posicao16, grafico_posicao17, grafico_posicao18, grafico_posicao19, grafico_posicao20,
pos01, pos02, pos03, pos04, pos05, pos06, pos07, pos08, pos09, pos10, pos11, pos12, pos13, pos14, pos15, pos16, pos17, pos18, pos19, pos20,
athletico_paranaense, atletico_mineiro, avai, bahia, botafogo, ceara, chapecoense, corinthians, cruzeiro, csa, flamengo, fluminense, fortaleza, goias, gremio, internacional, palmeiras,
santos, sao_paulo, vasco_da_gama,
tabela,
rodadas, hoje, hoje_dia, hoje_mes, hoje_ano,
atacantes, artilharia,
sumula, get_dados_da_url;
//End - Variáveis

//Start - TABELA

//Start - JSON da TABELA recebido pelo site
tabela = [
   {
      "sNome_Fase":"TURNO",
      "Tabela":[
         {
            "sNome_Clube":"TUBARÃO",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iPosicao":10,
            "iPontos":6,
            "iJogos":9,
            "iVitorias":1,
            "iEmpates":3,
            "iDerrotas":5,
            "iGols_Pro":5,
            "iGols_Contra":14,
            "iSaldo_Gols":-9,
            "iCartao_Amar":28,
            "iCartao_Verm":0
         },
         {
            "sNome_Clube":"CONCÓRDIA",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iPosicao":9,
            "iPontos":7,
            "iJogos":9,
            "iVitorias":1,
            "iEmpates":4,
            "iDerrotas":4,
            "iGols_Pro":10,
            "iGols_Contra":12,
            "iSaldo_Gols":-2,
            "iCartao_Amar":24,
            "iCartao_Verm":3
         },
         {
            "sNome_Clube":"CHAPECOENSE",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iPosicao":8,
            "iPontos":10,
            "iJogos":9,
            "iVitorias":2,
            "iEmpates":4,
            "iDerrotas":3,
            "iGols_Pro":8,
            "iGols_Contra":6,
            "iSaldo_Gols":2,
            "iCartao_Amar":26,
            "iCartao_Verm":3
         },
         {
            "sNome_Clube":"JOINVILLE",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iPosicao":7,
            "iPontos":10,
            "iJogos":9,
            "iVitorias":3,
            "iEmpates":1,
            "iDerrotas":5,
            "iGols_Pro":13,
            "iGols_Contra":17,
            "iSaldo_Gols":-4,
            "iCartao_Amar":29,
            "iCartao_Verm":4
         },
         {
            "sNome_Clube":"JUVENTUS",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iPosicao":6,
            "iPontos":11,
            "iJogos":9,
            "iVitorias":3,
            "iEmpates":2,
            "iDerrotas":4,
            "iGols_Pro":10,
            "iGols_Contra":10,
            "iSaldo_Gols":0,
            "iCartao_Amar":26,
            "iCartao_Verm":1
         },
         {
            "sNome_Clube":"CRICIÚMA",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iPosicao":5,
            "iPontos":13,
            "iJogos":9,
            "iVitorias":3,
            "iEmpates":4,
            "iDerrotas":2,
            "iGols_Pro":9,
            "iGols_Contra":9,
            "iSaldo_Gols":0,
            "iCartao_Amar":26,
            "iCartao_Verm":1
         },
         {
            "sNome_Clube":"FIGUEIRENSE",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iPosicao":4,
            "iPontos":15,
            "iJogos":9,
            "iVitorias":4,
            "iEmpates":3,
            "iDerrotas":2,
            "iGols_Pro":8,
            "iGols_Contra":5,
            "iSaldo_Gols":3,
            "iCartao_Amar":23,
            "iCartao_Verm":4
         },
         {
            "sNome_Clube":"MARCÍLIO DIAS",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iPosicao":3,
            "iPontos":15,
            "iJogos":9,
            "iVitorias":4,
            "iEmpates":3,
            "iDerrotas":2,
            "iGols_Pro":9,
            "iGols_Contra":9,
            "iSaldo_Gols":0,
            "iCartao_Amar":24,
            "iCartao_Verm":3
         },
         {
            "sNome_Clube":"BRUSQUE",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iPosicao":2,
            "iPontos":17,
            "iJogos":9,
            "iVitorias":5,
            "iEmpates":2,
            "iDerrotas":2,
            "iGols_Pro":13,
            "iGols_Contra":9,
            "iSaldo_Gols":4,
            "iCartao_Amar":25,
            "iCartao_Verm":1
         },
         {
            "sNome_Clube":"AVAÍ",
            "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iPosicao":1,
            "iPontos":17,
            "iJogos":9,
            "iVitorias":5,
            "iEmpates":2,
            "iDerrotas":2,
            "iGols_Pro":12,
            "iGols_Contra":6,
            "iSaldo_Gols":6,
            "iCartao_Amar":33,
            "iCartao_Verm":0
         }
      ]
   }
];
//End - JSON da TABELA recebido pelo site

//Start - Clubes Participantes
console.log("Clubes Participantes");
for(i = 0; i < tabela[0].Tabela.length; i++){
	console.log(tabela[0].Tabela[i].sNome_Clube);
}
//End - Clubes Participantes

//Start - Ordena as posições de acordo com a TAG iPosicao
for(i = 0; i < tabela[0].Tabela.length; i++){
	if(tabela[0].Tabela[i].iPosicao == 1){pos01 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 2){pos02 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 3){pos03 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 4){pos04 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 5){pos05 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 6){pos06 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 7){pos07 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 8){pos08 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 9){pos09 = tabela[0].Tabela[i];}
	if(tabela[0].Tabela[i].iPosicao == 10){pos10 = tabela[0].Tabela[i];}
}
//End - Ordena as posições de acordo com a TAG iPosicao

//Start - Após ordenar as posições, insere os dados na tabela do HTML
$('.trigger01 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos01.sLogo +')');
$('.trigger01 .principal-tabela-classificacao-linha-info-nome').html(pos01.sNome_Clube);
$('.trigger01 .principal-tabela-classificacao-linha-info-pontos').html(pos01.iPontos);
$('.trigger01 .principal-tabela-classificacao-linha-info-jogos').html(pos01.iJogos);
$('.trigger01 .principal-tabela-classificacao-linha-info-vitorias').html(pos01.iVitorias);
$('.trigger01 .principal-tabela-classificacao-linha-info-empates').html(pos01.iEmpates);
$('.trigger01 .principal-tabela-classificacao-linha-info-derrotas').html(pos01.iDerrotas);
$('.trigger01 .principal-tabela-classificacao-linha-info-gols-pro').html(pos01.iGols_Pro);
$('.trigger01 .principal-tabela-classificacao-linha-info-gols-contra').html(pos01.iGols_Contra);
$('.trigger01 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos01.iSaldo_Gols);
$('.trigger01 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos01.iCartao_Amar);
$('.trigger01 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos01.iCartao_Verm);
$('.trigger01 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos01.iAproveitamento);

$('.trigger02 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos02.sLogo +')');
$('.trigger02 .principal-tabela-classificacao-linha-info-nome').html(pos02.sNome_Clube);
$('.trigger02 .principal-tabela-classificacao-linha-info-pontos').html(pos02.iPontos);
$('.trigger02 .principal-tabela-classificacao-linha-info-jogos').html(pos02.iJogos);
$('.trigger02 .principal-tabela-classificacao-linha-info-vitorias').html(pos02.iVitorias);
$('.trigger02 .principal-tabela-classificacao-linha-info-empates').html(pos02.iEmpates);
$('.trigger02 .principal-tabela-classificacao-linha-info-derrotas').html(pos02.iDerrotas);
$('.trigger02 .principal-tabela-classificacao-linha-info-gols-pro').html(pos02.iGols_Pro);
$('.trigger02 .principal-tabela-classificacao-linha-info-gols-contra').html(pos02.iGols_Contra);
$('.trigger02 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos02.iSaldo_Gols);
$('.trigger02 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos02.iCartao_Amar);
$('.trigger02 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos02.iCartao_Verm);
$('.trigger02 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos02.iAproveitamento);

$('.trigger03 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos03.sLogo +')');
$('.trigger03 .principal-tabela-classificacao-linha-info-nome').html(pos03.sNome_Clube);
$('.trigger03 .principal-tabela-classificacao-linha-info-pontos').html(pos03.iPontos);
$('.trigger03 .principal-tabela-classificacao-linha-info-jogos').html(pos03.iJogos);
$('.trigger03 .principal-tabela-classificacao-linha-info-vitorias').html(pos03.iVitorias);
$('.trigger03 .principal-tabela-classificacao-linha-info-empates').html(pos03.iEmpates);
$('.trigger03 .principal-tabela-classificacao-linha-info-derrotas').html(pos03.iDerrotas);
$('.trigger03 .principal-tabela-classificacao-linha-info-gols-pro').html(pos03.iGols_Pro);
$('.trigger03 .principal-tabela-classificacao-linha-info-gols-contra').html(pos03.iGols_Contra);
$('.trigger03 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos03.iSaldo_Gols);
$('.trigger03 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos03.iCartao_Amar);
$('.trigger03 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos03.iCartao_Verm);
$('.trigger03 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos03.iAproveitamento);

$('.trigger04 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos04.sLogo +')');
$('.trigger04 .principal-tabela-classificacao-linha-info-nome').html(pos04.sNome_Clube);
$('.trigger04 .principal-tabela-classificacao-linha-info-pontos').html(pos04.iPontos);
$('.trigger04 .principal-tabela-classificacao-linha-info-jogos').html(pos04.iJogos);
$('.trigger04 .principal-tabela-classificacao-linha-info-vitorias').html(pos04.iVitorias);
$('.trigger04 .principal-tabela-classificacao-linha-info-empates').html(pos04.iEmpates);
$('.trigger04 .principal-tabela-classificacao-linha-info-derrotas').html(pos04.iDerrotas);
$('.trigger04 .principal-tabela-classificacao-linha-info-gols-pro').html(pos04.iGols_Pro);
$('.trigger04 .principal-tabela-classificacao-linha-info-gols-contra').html(pos04.iGols_Contra);
$('.trigger04 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos04.iSaldo_Gols);
$('.trigger04 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos04.iCartao_Amar);
$('.trigger04 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos04.iCartao_Verm);
$('.trigger04 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos04.iAproveitamento);

$('.trigger05 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos05.sLogo +')');
$('.trigger05 .principal-tabela-classificacao-linha-info-nome').html(pos05.sNome_Clube);
$('.trigger05 .principal-tabela-classificacao-linha-info-pontos').html(pos05.iPontos);
$('.trigger05 .principal-tabela-classificacao-linha-info-jogos').html(pos05.iJogos);
$('.trigger05 .principal-tabela-classificacao-linha-info-vitorias').html(pos05.iVitorias);
$('.trigger05 .principal-tabela-classificacao-linha-info-empates').html(pos05.iEmpates);
$('.trigger05 .principal-tabela-classificacao-linha-info-derrotas').html(pos05.iDerrotas);
$('.trigger05 .principal-tabela-classificacao-linha-info-gols-pro').html(pos05.iGols_Pro);
$('.trigger05 .principal-tabela-classificacao-linha-info-gols-contra').html(pos05.iGols_Contra);
$('.trigger05 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos05.iSaldo_Gols);
$('.trigger05 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos05.iCartao_Amar);
$('.trigger05 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos05.iCartao_Verm);
$('.trigger05 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos05.iAproveitamento);

$('.trigger06 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos06.sLogo +')');
$('.trigger06 .principal-tabela-classificacao-linha-info-nome').html(pos06.sNome_Clube);
$('.trigger06 .principal-tabela-classificacao-linha-info-pontos').html(pos06.iPontos);
$('.trigger06 .principal-tabela-classificacao-linha-info-jogos').html(pos06.iJogos);
$('.trigger06 .principal-tabela-classificacao-linha-info-vitorias').html(pos06.iVitorias);
$('.trigger06 .principal-tabela-classificacao-linha-info-empates').html(pos06.iEmpates);
$('.trigger06 .principal-tabela-classificacao-linha-info-derrotas').html(pos06.iDerrotas);
$('.trigger06 .principal-tabela-classificacao-linha-info-gols-pro').html(pos06.iGols_Pro);
$('.trigger06 .principal-tabela-classificacao-linha-info-gols-contra').html(pos06.iGols_Contra);
$('.trigger06 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos06.iSaldo_Gols);
$('.trigger06 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos06.iCartao_Amar);
$('.trigger06 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos06.iCartao_Verm);
$('.trigger06 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos06.iAproveitamento);

$('.trigger07 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos07.sLogo +')');
$('.trigger07 .principal-tabela-classificacao-linha-info-nome').html(pos07.sNome_Clube);
$('.trigger07 .principal-tabela-classificacao-linha-info-pontos').html(pos07.iPontos);
$('.trigger07 .principal-tabela-classificacao-linha-info-jogos').html(pos07.iJogos);
$('.trigger07 .principal-tabela-classificacao-linha-info-vitorias').html(pos07.iVitorias);
$('.trigger07 .principal-tabela-classificacao-linha-info-empates').html(pos07.iEmpates);
$('.trigger07 .principal-tabela-classificacao-linha-info-derrotas').html(pos07.iDerrotas);
$('.trigger07 .principal-tabela-classificacao-linha-info-gols-pro').html(pos07.iGols_Pro);
$('.trigger07 .principal-tabela-classificacao-linha-info-gols-contra').html(pos07.iGols_Contra);
$('.trigger07 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos07.iSaldo_Gols);
$('.trigger07 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos07.iCartao_Amar);
$('.trigger07 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos07.iCartao_Verm);
$('.trigger07 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos07.iAproveitamento);

$('.trigger08 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos08.sLogo +')');
$('.trigger08 .principal-tabela-classificacao-linha-info-nome').html(pos08.sNome_Clube);
$('.trigger08 .principal-tabela-classificacao-linha-info-pontos').html(pos08.iPontos);
$('.trigger08 .principal-tabela-classificacao-linha-info-jogos').html(pos08.iJogos);
$('.trigger08 .principal-tabela-classificacao-linha-info-vitorias').html(pos08.iVitorias);
$('.trigger08 .principal-tabela-classificacao-linha-info-empates').html(pos08.iEmpates);
$('.trigger08 .principal-tabela-classificacao-linha-info-derrotas').html(pos08.iDerrotas);
$('.trigger08 .principal-tabela-classificacao-linha-info-gols-pro').html(pos08.iGols_Pro);
$('.trigger08 .principal-tabela-classificacao-linha-info-gols-contra').html(pos08.iGols_Contra);
$('.trigger08 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos08.iSaldo_Gols);
$('.trigger08 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos08.iCartao_Amar);
$('.trigger08 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos08.iCartao_Verm);
$('.trigger08 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos08.iAproveitamento);

$('.trigger09 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos09.sLogo +')');
$('.trigger09 .principal-tabela-classificacao-linha-info-nome').html(pos09.sNome_Clube);
$('.trigger09 .principal-tabela-classificacao-linha-info-pontos').html(pos09.iPontos);
$('.trigger09 .principal-tabela-classificacao-linha-info-jogos').html(pos09.iJogos);
$('.trigger09 .principal-tabela-classificacao-linha-info-vitorias').html(pos09.iVitorias);
$('.trigger09 .principal-tabela-classificacao-linha-info-empates').html(pos09.iEmpates);
$('.trigger09 .principal-tabela-classificacao-linha-info-derrotas').html(pos09.iDerrotas);
$('.trigger09 .principal-tabela-classificacao-linha-info-gols-pro').html(pos09.iGols_Pro);
$('.trigger09 .principal-tabela-classificacao-linha-info-gols-contra').html(pos09.iGols_Contra);
$('.trigger09 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos09.iSaldo_Gols);
$('.trigger09 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos09.iCartao_Amar);
$('.trigger09 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos09.iCartao_Verm);
$('.trigger09 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos09.iAproveitamento);

$('.trigger10 .principal-tabela-classificacao-linha-info-escudo').css('background-image', 'url('+ pos10.sLogo +')');
$('.trigger10 .principal-tabela-classificacao-linha-info-nome').html(pos10.sNome_Clube);
$('.trigger10 .principal-tabela-classificacao-linha-info-pontos').html(pos10.iPontos);
$('.trigger10 .principal-tabela-classificacao-linha-info-jogos').html(pos10.iJogos);
$('.trigger10 .principal-tabela-classificacao-linha-info-vitorias').html(pos10.iVitorias);
$('.trigger10 .principal-tabela-classificacao-linha-info-empates').html(pos10.iEmpates);
$('.trigger10 .principal-tabela-classificacao-linha-info-derrotas').html(pos10.iDerrotas);
$('.trigger10 .principal-tabela-classificacao-linha-info-gols-pro').html(pos10.iGols_Pro);
$('.trigger10 .principal-tabela-classificacao-linha-info-gols-contra').html(pos10.iGols_Contra);
$('.trigger10 .principal-tabela-classificacao-linha-info-saldo-de-gols').html(pos10.iSaldo_Gols);
$('.trigger10 .principal-tabela-classificacao-linha-info-cartoes-amarelos').html(pos10.iCartao_Amar);
$('.trigger10 .principal-tabela-classificacao-linha-info-cartoes-vermelhos').html(pos10.iCartao_Verm);
$('.trigger10 .principal-tabela-classificacao-linha-info-aproveitamento').html(pos10.iAproveitamento);
//Start - Após ordenar as posições, insere os dados na tabela do HTML

//End - TABELA

//Start - RODADAS

//Start - JSON das RODADAS recebido pelo site
rodadas = [
   {
      "sRodada":"1ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"1",
            "sData":"22/01/2020",
            "sDiaSemana":"Qua",
            "sHora":"21:00",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"2",
            "sData":"22/01/2020",
            "sDiaSemana":"Qua",
            "sHora":"21:30",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"GECOM",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":1,
            "iCartVerMandante":0,
            "sNmVisitante":"AVAÍ",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"3",
            "sData":"22/01/2020",
            "sDiaSemana":"Qua",
            "sHora":"19:00",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"4",
            "sData":"23/01/2020",
            "sDiaSemana":"",
            "sHora":"21:00",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"5",
            "sData":"23/01/2020",
            "sDiaSemana":"",
            "sHora":"19:00",
            "sEstadio":"Arena Joinville",
            "sCidade":"Joinville",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JOINVILLE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"2ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"6",
            "sData":"26/01/2020",
            "sDiaSemana":"Dom",
            "sHora":"18:30",
            "sEstadio":"Augusto Bauer",
            "sCidade":"Brusque",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"BRUSQUE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsMandante":5,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":4,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"7",
            "sData":"26/01/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Domingos Silveira Gonzalez",
            "sCidade":"Tubarão",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"TUBARÃO",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"FIGUEIRENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsVisitante":2,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"8",
            "sData":"26/01/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"João Marcatto",
            "sCidade":"Jaraguá do Sul",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JUVENTUS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsMandante":3,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"CRICIÚMA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsVisitante":2,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"9",
            "sData":"25/01/2020",
            "sDiaSemana":"Sáb",
            "sHora":"17:00",
            "sEstadio":"Domingos Machado de Lima",
            "sCidade":"Concórdia",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CONCÓRDIA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"CHAPECOENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"10",
            "sData":"27/01/2020",
            "sDiaSemana":"Seg",
            "sHora":"20:00",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":3,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"MARCÍLIO DIAS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"3ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"11",
            "sData":"30/01/2020",
            "sDiaSemana":"",
            "sHora":"21:30",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"12",
            "sData":"30/01/2020",
            "sDiaSemana":"",
            "sHora":"21:00",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":1,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"13",
            "sData":"29/01/2020",
            "sDiaSemana":"Qua",
            "sHora":"19:00",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"14",
            "sData":"30/01/2020",
            "sDiaSemana":"",
            "sHora":"19:00",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"15",
            "sData":"29/01/2020",
            "sDiaSemana":"Qua",
            "sHora":"21:30",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"FCFTV/GECOM",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"4ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"16",
            "sData":"02/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"18:30",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":1,
            "iCartVerMandante":1,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"17",
            "sData":"02/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":1,
            "sNmVisitante":"MARCÍLIO DIAS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"18",
            "sData":"02/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"AVAÍ",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsVisitante":2,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":6,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"19",
            "sData":"02/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"19:30",
            "sEstadio":"Arena Joinville",
            "sCidade":"Joinville",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JOINVILLE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":6,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"20",
            "sData":"03/02/2020",
            "sDiaSemana":"Seg",
            "sHora":"20:00",
            "sEstadio":"Domingos Silveira Gonzalez",
            "sCidade":"Tubarão",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"TUBARÃO",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"5ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"21",
            "sData":"08/02/2020",
            "sDiaSemana":"Sáb",
            "sHora":"19:00",
            "sEstadio":"Augusto Bauer",
            "sCidade":"Brusque",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"BRUSQUE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"22",
            "sData":"08/02/2020",
            "sDiaSemana":"Sáb",
            "sHora":"16:00",
            "sEstadio":"João Marcatto",
            "sCidade":"Jaraguá do Sul",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JUVENTUS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":3,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"23",
            "sData":"09/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Domingos Machado de Lima",
            "sCidade":"Concórdia",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CONCÓRDIA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"FIGUEIRENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsVisitante":2,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":1,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"24",
            "sData":"09/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"CRICIÚMA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"25",
            "sData":"09/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"17:00",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":1,
            "iCartVerMandante":1,
            "sNmVisitante":"CHAPECOENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"6ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"26",
            "sData":"16/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"18:30",
            "sEstadio":"Augusto Bauer",
            "sCidade":"Brusque",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"BRUSQUE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"27",
            "sData":"16/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Domingos Machado de Lima",
            "sCidade":"Concórdia",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CONCÓRDIA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsMandante":4,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"28",
            "sData":"16/02/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":5,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"29",
            "sData":"15/02/2020",
            "sDiaSemana":"Sáb",
            "sHora":"19:00",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"FIGUEIRENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"30",
            "sData":"15/02/2020",
            "sDiaSemana":"Sáb",
            "sHora":"17:00",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":1,
            "sNmVisitante":"CRICIÚMA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"7ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"31",
            "sData":"01/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"18:30",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":3,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"32",
            "sData":"01/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":1,
            "sNmVisitante":"CHAPECOENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"33",
            "sData":"29/02/2020",
            "sDiaSemana":"Sáb",
            "sHora":"19:00",
            "sEstadio":"Arena Joinville",
            "sCidade":"Joinville",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JOINVILLE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"MARCÍLIO DIAS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":6,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"34",
            "sData":"02/03/2020",
            "sDiaSemana":"Seg",
            "sHora":"20:00",
            "sEstadio":"Domingos Silveira Gonzalez",
            "sCidade":"Tubarão",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"TUBARÃO",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"AVAÍ",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsVisitante":2,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":5,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"35",
            "sData":"01/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"João Marcatto",
            "sCidade":"Jaraguá do Sul",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JUVENTUS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"8ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"36",
            "sData":"08/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Augusto Bauer",
            "sCidade":"Brusque",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"BRUSQUE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":5,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"37",
            "sData":"08/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"38",
            "sData":"08/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"39",
            "sData":"08/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":3,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":5,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"40",
            "sData":"08/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"NSCTV",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":3,
            "iCartVerMandante":0,
            "sNmVisitante":"FIGUEIRENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":2,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"9ª RODADA TURNO",
      "Jogos":[
         {
            "sJogo":"41",
            "sData":"15/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NSCTV/FCFTV",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"42",
            "sData":"15/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Arena Joinville",
            "sCidade":"Joinville",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JOINVILLE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"CRICIÚMA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":4,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"43",
            "sData":"15/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Domingos Silveira Gonzalez",
            "sCidade":"Tubarão",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"TUBARÃO",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":0,
            "sNmVisitante":"CHAPECOENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsVisitante":3,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"44",
            "sData":"15/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"João Marcatto",
            "sCidade":"Jaraguá do Sul",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"JUVENTUS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsMandante":2,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":4,
            "iCartVerMandante":0,
            "sNmVisitante":"MARCÍLIO DIAS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":1,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"45",
            "sData":"15/03/2020",
            "sDiaSemana":"Dom",
            "sHora":"16:00",
            "sEstadio":"Domingos Machado de Lima",
            "sCidade":"Concórdia",
            "sLogoTransmissao":"FCFTV",
            "sNmMandante":"CONCÓRDIA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsMandante":1,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":2,
            "iCartVerMandante":1,
            "sNmVisitante":"AVAÍ",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsVisitante":1,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":3,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"IDA QUARTAS DE FINAL",
      "Jogos":[
         {
            "sJogo":"46",
            "sData":"31/05/2020",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Arena Condá",
            "sCidade":"Chapecó",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"CHAPECOENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"AVAÍ",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"47",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Heriberto Hülse",
            "sCidade":"Criciúma",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"CRICIÚMA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"MARCÍLIO DIAS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"48",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Arena Joinville",
            "sCidade":"Joinville",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"JOINVILLE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"BRUSQUE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"49",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"João Marcatto",
            "sCidade":"Jaraguá do Sul",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"JUVENTUS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"FIGUEIRENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"VOLTA QUARTAS DE FINAL",
      "Jogos":[
         {
            "sJogo":"50",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Dr. Aderbal Ramos da Silva",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"AVAÍ",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"CHAPECOENSE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"51",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Dr. Hercílio Luz",
            "sCidade":"Itajaí",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"MARCÍLIO DIAS",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"CRICIÚMA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"52",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Augusto Bauer",
            "sCidade":"Brusque",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"BRUSQUE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"JOINVILLE",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"53",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Orlando Scarpelli",
            "sCidade":"Florianópolis",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"FIGUEIRENSE",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"JUVENTUS",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"IDA CONFRONTO ELIMINATÓRIO - DESCENSO",
      "Jogos":[
         {
            "sJogo":"54",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Domingos Silveira Gonzalez",
            "sCidade":"Tubarão",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"TUBARÃO",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"CONCÓRDIA",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"VOLTA CONFRONTO ELIMINATÓRIO - DESCENSO",
      "Jogos":[
         {
            "sJogo":"55",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"Domingos Machado de Lima",
            "sCidade":"Concórdia",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"CONCÓRDIA",
            "sLogoMandante":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"TUBARÃO",
            "sLogoVisitante":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"IDA SEMIFINAIS.",
      "Jogos":[
         {
            "sJogo":"56",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"57",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"VOLTA SEMIFINAIS.",
      "Jogos":[
         {
            "sJogo":"58",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         },
         {
            "sJogo":"59",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"IDA FINAIS",
      "Jogos":[
         {
            "sJogo":"60",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   },
   {
      "sRodada":"VOLTA FINAIS",
      "Jogos":[
         {
            "sJogo":"61",
            "sData":"",
            "sDiaSemana":"Sex",
            "sHora":"",
            "sEstadio":"",
            "sCidade":"",
            "sLogoTransmissao":"NAO",
            "sNmMandante":"",
            "sLogoMandante":"",
            "iGolsMandante":0,
            "iGolsMandantePro":0,
            "iGolsMandantePen":0,
            "iCartAmaMandante":0,
            "iCartVerMandante":0,
            "sNmVisitante":"",
            "sLogoVisitante":"",
            "iGolsVisitante":0,
            "iGolsVisitantePro":0,
            "iGolsVisitantePen":0,
            "iCartAmaVisitante":0,
            "iCartVerVisitante":0,
            "sSumula":"",
            "sIMT":"",
            "sArbritagem":"",
            "sDelegado":"",
            "sBoletimFinan":""
         }
      ]
   }
];
//Start - JSON das RODADAS recebido pelo site

//Start - Carrossel Rodadas
hoje = new Date();
console.log('hoje: '+ String(hoje));

dia_da_rodada01 = rodadas[0].Jogos[0].sData.substr(0,2);
mes_da_rodada01 = rodadas[0].Jogos[0].sData.substr(3,2);
ano_da_rodada01 = rodadas[0].Jogos[0].sData.substr(6,4);
hora_da_rodada01 = '23:59:59';
data_da_rodada01 = new Date(mes_da_rodada01 +'/'+ dia_da_rodada01 +'/'+ ano_da_rodada01 +' '+ hora_da_rodada01);//mm/dd/YYYY hh:mm:ss
console.log('data_da_rodada01: '+ data_da_rodada01);
if(hoje <= data_da_rodada01){

	console.log('Estamos na 1ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:0
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 0);
	});
	
}

dia_da_rodada02 = rodadas[1].Jogos[0].sData.substr(0,2);
mes_da_rodada02 = rodadas[1].Jogos[0].sData.substr(3,2);
ano_da_rodada02 = rodadas[1].Jogos[0].sData.substr(6,4);
hora_da_rodada02 = '23:59:59';
data_da_rodada02 = new Date(mes_da_rodada02 +'/'+ dia_da_rodada02 +'/'+ ano_da_rodada02 +' '+ hora_da_rodada02);//mm/dd/YYYY
console.log('data_da_rodada02: '+ data_da_rodada02);
if(hoje <= data_da_rodada02){

	console.log('Estamos na 2ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:1
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 1);
	});
	
}

dia_da_rodada03 = rodadas[2].Jogos[0].sData.substr(0,2);
mes_da_rodada03 = rodadas[2].Jogos[0].sData.substr(3,2);
ano_da_rodada03 = rodadas[2].Jogos[0].sData.substr(6,4);
hora_da_rodada03 = '23:59:59';
data_da_rodada03 = new Date(mes_da_rodada03 +'/'+ dia_da_rodada03 +'/'+ ano_da_rodada03 +' '+ hora_da_rodada03);//mm/dd/YYYY
console.log('data_da_rodada03: '+ data_da_rodada03);
if(hoje <= data_da_rodada03){

	console.log('Estamos na 3ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:2
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 2);
	});
	
}

dia_da_rodada04 = rodadas[3].Jogos[0].sData.substr(0,2);
mes_da_rodada04 = rodadas[3].Jogos[0].sData.substr(3,2);
ano_da_rodada04 = rodadas[3].Jogos[0].sData.substr(6,4);
hora_da_rodada04 = '23:59:59';
data_da_rodada04 = new Date(mes_da_rodada04 +'/'+ dia_da_rodada04 +'/'+ ano_da_rodada04 +' '+ hora_da_rodada04);//mm/dd/YYYY
console.log('data_da_rodada04: '+ data_da_rodada04);
if(hoje <= data_da_rodada04){

	console.log('Estamos na 4ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:3
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 3);
	});
	
}

dia_da_rodada05 = rodadas[4].Jogos[0].sData.substr(0,2);
mes_da_rodada05 = rodadas[4].Jogos[0].sData.substr(3,2);
ano_da_rodada05 = rodadas[4].Jogos[0].sData.substr(6,4);
hora_da_rodada05 = '23:59:59';
data_da_rodada05 = new Date(mes_da_rodada05 +'/'+ dia_da_rodada05 +'/'+ ano_da_rodada05 +' '+ hora_da_rodada05);//mm/dd/YYYY
console.log('data_da_rodada05: '+ data_da_rodada05);
if(hoje <= data_da_rodada05){

	console.log('Estamos na 5ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:4
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 4);
	});
	
}

dia_da_rodada06 = rodadas[5].Jogos[0].sData.substr(0,2);
mes_da_rodada06 = rodadas[5].Jogos[0].sData.substr(3,2);
ano_da_rodada06 = rodadas[5].Jogos[0].sData.substr(6,4);
hora_da_rodada06 = '23:59:59';
data_da_rodada06 = new Date(mes_da_rodada06 +'/'+ dia_da_rodada06 +'/'+ ano_da_rodada06 +' '+ hora_da_rodada06);//mm/dd/YYYY
console.log('data_da_rodada06: '+ data_da_rodada06);
if(hoje <= data_da_rodada06){

	console.log('Estamos na 6ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:5
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 5);
	});
	
}

dia_da_rodada07 = rodadas[6].Jogos[0].sData.substr(0,2);
mes_da_rodada07 = rodadas[6].Jogos[0].sData.substr(3,2);
ano_da_rodada07 = rodadas[6].Jogos[0].sData.substr(6,4);
hora_da_rodada07 = '23:59:59';
data_da_rodada07 = new Date(mes_da_rodada07 +'/'+ dia_da_rodada07 +'/'+ ano_da_rodada07 +' '+ hora_da_rodada07);//mm/dd/YYYY
console.log('data_da_rodada07: '+ data_da_rodada07);
if(hoje <= data_da_rodada07){

	console.log('Estamos na 7ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:6
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 6);
	});
	
}

dia_da_rodada08 = rodadas[7].Jogos[0].sData.substr(0,2);
mes_da_rodada08 = rodadas[7].Jogos[0].sData.substr(3,2);
ano_da_rodada08 = rodadas[7].Jogos[0].sData.substr(6,4);
hora_da_rodada08 = '23:59:59';
data_da_rodada08 = new Date(mes_da_rodada08 +'/'+ dia_da_rodada08 +'/'+ ano_da_rodada08 +' '+ hora_da_rodada08);//mm/dd/YYYY
console.log('data_da_rodada08: '+ data_da_rodada08);
if(hoje <= data_da_rodada08){

	console.log('Estamos na 8ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:7
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 7);
	});
	
}

dia_da_rodada09 = rodadas[8].Jogos[0].sData.substr(0,2);
mes_da_rodada09 = rodadas[8].Jogos[0].sData.substr(3,2);
ano_da_rodada09 = rodadas[8].Jogos[0].sData.substr(6,4);
hora_da_rodada09 = '23:59:59';
data_da_rodada09 = new Date(mes_da_rodada09 +'/'+ dia_da_rodada09 +'/'+ ano_da_rodada09 +' '+ hora_da_rodada09);//mm/dd/YYYY
console.log('data_da_rodada09: '+ data_da_rodada09);
if(hoje <= data_da_rodada09){

	console.log('Estamos na 9ª rodada.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:8
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 8);
	});
	
}

dia_da_rodada_quartas_ida = rodadas[9].Jogos[0].sData.substr(0,2);
mes_da_rodada_quartas_ida = rodadas[9].Jogos[0].sData.substr(3,2);
ano_da_rodada_quartas_ida = rodadas[9].Jogos[0].sData.substr(6,4);
hora_da_rodada_quartas_ida = '23:59:59';
data_da_rodada_quartas_ida = new Date(mes_da_rodada_quartas_ida +'/'+ dia_da_rodada_quartas_ida +'/'+ ano_da_rodada_quartas_ida +' '+ hora_da_rodada_quartas_ida);//mm/dd/YYYY
console.log('data_da_rodada_quartas_ida: '+ data_da_rodada_quartas_ida);
if(hoje <= data_da_rodada_quartas_ida){

	console.log('Estamos nas Quartas de Final - IDA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:9
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 9);
	});
	
}

dia_da_rodada_quartas_volta = rodadas[10].Jogos[0].sData.substr(0,2);
mes_da_rodada_quartas_volta = rodadas[10].Jogos[0].sData.substr(3,2);
ano_da_rodada_quartas_volta = rodadas[10].Jogos[0].sData.substr(6,4);
hora_da_rodada_quartas_volta = '23:59:59';
data_da_rodada_quartas_volta = new Date(mes_da_rodada_quartas_volta +'/'+ dia_da_rodada_quartas_volta +'/'+ ano_da_rodada_quartas_volta +' '+ hora_da_rodada_quartas_volta);//mm/dd/YYYY
console.log('data_da_rodada_quartas_volta: '+ data_da_rodada_quartas_volta);
if(hoje <= data_da_rodada_quartas_volta){

	console.log('Estamos nas Quartas de Final - VOLTA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:10
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 10);
	});
	
}

dia_da_rodada_descenso_ida = rodadas[11].Jogos[0].sData.substr(0,2);
mes_da_rodada_descenso_ida = rodadas[11].Jogos[0].sData.substr(3,2);
ano_da_rodada_descenso_ida = rodadas[11].Jogos[0].sData.substr(6,4);
hora_da_rodada_descenso_ida = '23:59:59';
data_da_rodada_descenso_ida = new Date(mes_da_rodada_descenso_ida +'/'+ dia_da_rodada_descenso_ida +'/'+ ano_da_rodada_descenso_ida +' '+ hora_da_rodada_descenso_ida);//mm/dd/YYYY
console.log('data_da_rodada_descenso_ida: '+ data_da_rodada_descenso_ida);
if(hoje <= data_da_rodada_descenso_ida){

	console.log('Estamos na rodada de Descenso - IDA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:11
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 11);
	});
	
}

dia_da_rodada_descenso_volta = rodadas[12].Jogos[0].sData.substr(0,2);
mes_da_rodada_descenso_volta = rodadas[12].Jogos[0].sData.substr(3,2);
ano_da_rodada_descenso_volta = rodadas[12].Jogos[0].sData.substr(6,4);
hora_da_rodada_descenso_volta = '23:59:59';
data_da_rodada_descenso_volta = new Date(mes_da_rodada_descenso_volta +'/'+ dia_da_rodada_descenso_volta +'/'+ ano_da_rodada_descenso_volta +' '+ hora_da_rodada_descenso_volta);//mm/dd/YYYY
console.log('data_da_rodada_descenso_volta: '+ data_da_rodada_descenso_volta);
if(hoje <= data_da_rodada_descenso_volta){

	console.log('Estamos na rodada de Descenso - VOLTA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:12
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 12);
	});
	
}

dia_da_rodada_semi_ida = rodadas[13].Jogos[0].sData.substr(0,2);
mes_da_rodada_semi_ida = rodadas[13].Jogos[0].sData.substr(3,2);
ano_da_rodada_semi_ida = rodadas[13].Jogos[0].sData.substr(6,4);
hora_da_rodada_semi_ida = '23:59:59';
data_da_rodada_semi_ida = new Date(mes_da_rodada_semi_ida +'/'+ dia_da_rodada_semi_ida +'/'+ ano_da_rodada_semi_ida +' '+ hora_da_rodada_semi_ida);//mm/dd/YYYY
console.log('data_da_rodada_semi_ida: '+ data_da_rodada_semi_ida);
if(hoje <= data_da_rodada_semi_ida){

	console.log('Estamos na Semi Final - IDA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:13
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 13);
	});
	
}

dia_da_rodada_semi_volta = rodadas[14].Jogos[0].sData.substr(0,2);
mes_da_rodada_semi_volta = rodadas[14].Jogos[0].sData.substr(3,2);
ano_da_rodada_semi_volta = rodadas[14].Jogos[0].sData.substr(6,4);
hora_da_rodada_semi_volta = '23:59:59';
data_da_rodada_semi_volta = new Date(mes_da_rodada_semi_volta +'/'+ dia_da_rodada_semi_volta +'/'+ ano_da_rodada_semi_volta +' '+ hora_da_rodada_semi_volta);//mm/dd/YYYY
console.log('data_da_rodada_semi_volta: '+ data_da_rodada_semi_volta);
if(hoje <= data_da_rodada_semi_volta){

	console.log('Estamos na Semi Final - Volta.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:14
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 14);
	});
	
}

dia_da_rodada_final_ida = rodadas[15].Jogos[0].sData.substr(0,2);
mes_da_rodada_final_ida = rodadas[15].Jogos[0].sData.substr(3,2);
ano_da_rodada_final_ida = rodadas[15].Jogos[0].sData.substr(6,4);
hora_da_rodada_final_ida = '23:59:59';
data_da_rodada_final_ida = new Date(mes_da_rodada_final_ida +'/'+ dia_da_rodada_final_ida +'/'+ ano_da_rodada_final_ida +' '+ hora_da_rodada_final_ida);//mm/dd/YYYY
console.log('data_da_rodada_final_ida: '+ data_da_rodada_final_ida);
if(hoje <= data_da_rodada_final_ida){

	console.log('Estamos na Final - IDA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:15
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 15);
	});
	
}

dia_da_rodada_final_volta = rodadas[16].Jogos[0].sData.substr(0,2);
mes_da_rodada_final_volta = rodadas[16].Jogos[0].sData.substr(3,2);
ano_da_rodada_final_volta = rodadas[16].Jogos[0].sData.substr(6,4);
hora_da_rodada_final_volta = '23:59:59';
data_da_rodada_final_volta = new Date(mes_da_rodada_final_volta +'/'+ dia_da_rodada_final_volta +'/'+ ano_da_rodada_final_volta +' '+ hora_da_rodada_final_volta);//mm/dd/YYYY
console.log('data_da_rodada_final_volta: '+ data_da_rodada_final_volta);
if(hoje <= data_da_rodada_final_volta){

	console.log('Estamos na Final - VOLTA.');
	$('.principal-jogos-container').flickity({
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		initialIndex:16
	});
	
	$(".principal-jogos-subtitulo").click(function(){
		$(".principal-jogos-container").flickity('select', 16);
	});
	
}
//End - Carrossel Rodadas

//Start - Objeto Rodadas em console
console.log("Rodadas");
for(i = 0; i < rodadas.length; i++){
	console.log(rodadas[i]);
}
//End - Objeto Rodadas em console

//Start - Inserir jogos nas rodadas - FASE DE TURNOS
for(i = 0; i <= 8; i++){
	
	contador_rodada = Number(i + 1);
	
	for(j = 0; j < rodadas[i].Jogos.length; j++){
	
		contador_jogo = Number(j + 1);
			
		$('.rodada'+ contador_rodada +' > .principal-jogos-barra > .principal-jogos-barra-txt').html(contador_rodada +'ª RODADA');
		$('.rodada'+ contador_rodada +' > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('TURNOS');
		
		if(rodadas[i].Jogos[j].sNmMandante != ''){
			
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-data').html(rodadas[i].Jogos[j].sDiaSemana +', '+ rodadas[i].Jogos[j].sData +' - Jogo: '+ rodadas[i].Jogos[j].sJogo);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[i].Jogos[j].sNmMandante);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[i].Jogos[j].sLogoMandante +')');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[i].Jogos[j].iGolsMandante +' x '+ rodadas[i].Jogos[j].iGolsVisitante);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[i].Jogos[j].sLogoVisitante +')');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[i].Jogos[j].sNmVisitante);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[i].Jogos[j].sEstadio +' - '+ rodadas[i].Jogos[j].sCidade);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
			
			//console.log("rodadas["+i+"].Jogos["+j+"].sDiaSemana: "+ rodadas[i].Jogos[j].sDiaSemana);
		
		}else{
			
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[i].Jogos[j].sJogo);
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
	
	}
	
}
//End - Inserir jogos nas rodadas - FASE DE TURNOS

//Start - Inserir jogos nas rodadas - QUARTAS DE FINAL
if(rodadas[9].sRodada == 'IDA QUARTAS DE FINAL'){

	for(j = 0; j < rodadas[9].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
		$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
		
		if(rodadas[9].Jogos[j].sNmMandante != ""){
		
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[9].Jogos[j].sDiaSemana +', '+ rodadas[9].Jogos[j].sData +' - Jogo: '+ rodadas[9].Jogos[j].sJogo);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[9].Jogos[j].sNmMandante);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[9].Jogos[j].sLogoMandante +')');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[9].Jogos[j].iGolsMandante +' x '+ rodadas[9].Jogos[j].iGolsVisitante);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[9].Jogos[j].sLogoVisitante +')');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[9].Jogos[j].sNmVisitante);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[9].Jogos[j].sEstadio +' - '+ rodadas[9].Jogos[j].sCidade);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[9].Jogos[j].sJogo);
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
if(rodadas[10].sRodada == 'VOLTA QUARTAS DE FINAL'){

	for(j = 0; j < rodadas[10].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
		$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
		
		if(rodadas[10].Jogos[j].sNmMandante != ""){
		
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[10].Jogos[j].sDiaSemana +', '+ rodadas[10].Jogos[j].sData +' - Jogo: '+ rodadas[10].Jogos[j].sJogo);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[10].Jogos[j].sNmMandante);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[10].Jogos[j].sLogoMandante +')');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[10].Jogos[j].iGolsMandante +' x '+ rodadas[10].Jogos[j].iGolsVisitante);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[10].Jogos[j].sLogoVisitante +')');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[10].Jogos[j].sNmVisitante);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[10].Jogos[j].sEstadio +' - '+ rodadas[10].Jogos[j].sCidade);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
			
		}else{
			
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[10].Jogos[j].sJogo);
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
//End - Inserir jogos nas rodadas - QUARTAS DE FINAL

//Start - Inserir jogos nas rodadas - DESCENSO
if(rodadas[11].sRodada == 'IDA CONFRONTO ELIMINATÓRIO - DESCENSO'){

	for(j = 0; j < rodadas[11].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
		$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
		
		if(rodadas[11].Jogos[j].sNmMandante != ""){
		
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[11].Jogos[j].sDiaSemana +', '+ rodadas[11].Jogos[j].sData +' - Jogo: '+ rodadas[11].Jogos[j].sJogo);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[11].Jogos[j].sNmMandante);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[11].Jogos[j].sLogoMandante +')');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[11].Jogos[j].iGolsMandante +' x '+ rodadas[11].Jogos[j].iGolsVisitante);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[11].Jogos[j].sLogoVisitante +')');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[11].Jogos[j].sNmVisitante);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[11].Jogos[j].sEstadio +' - '+ rodadas[11].Jogos[j].sCidade);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
			
			
		}else{
			
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[11].Jogos[j].sJogo);
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
if(rodadas[12].sRodada == 'VOLTA CONFRONTO ELIMINATÓRIO - DESCENSO'){
		
	for(j = 0; j < rodadas[12].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
		$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
		
		if(rodadas[12].Jogos[j].sNmMandante != ""){
		
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[12].Jogos[j].sDiaSemana +', '+ rodadas[12].Jogos[j].sData +' - Jogo: '+ rodadas[12].Jogos[j].sJogo);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[12].Jogos[j].sNmMandante);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[12].Jogos[j].sLogoMandante +')');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[12].Jogos[j].iGolsMandante +' x '+ rodadas[12].Jogos[j].iGolsVisitante);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[12].Jogos[j].sLogoVisitante +')');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[12].Jogos[j].sNmVisitante);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[12].Jogos[j].sEstadio +' - '+ rodadas[12].Jogos[j].sCidade);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[12].Jogos[j].sJogo);
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
//End - Inserir jogos nas rodadas - DESCENSO

//Start - Inserir jogos nas rodadas - SEMI FINAIS
if(rodadas[13].sRodada == 'IDA SEMIFINAIS.'){

	for(j = 0; j < rodadas[13].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
		$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
		
		if(rodadas[13].Jogos[j].sNmMandante != ""){
		
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[13].Jogos[j].sDiaSemana +', '+ rodadas[13].Jogos[j].sData +' - Jogo: '+ rodadas[13].Jogos[j].sJogo);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[13].Jogos[j].sNmMandante);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[13].Jogos[j].sLogoMandante +')');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[13].Jogos[j].iGolsMandante +' x '+ rodadas[13].Jogos[j].iGolsVisitante);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[13].Jogos[j].sLogoVisitante +')');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[13].Jogos[j].sNmVisitante);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[13].Jogos[j].sEstadio +' - '+ rodadas[13].Jogos[j].sCidade);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[13].Jogos[j].sJogo);
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
if(rodadas[14].sRodada == 'VOLTA SEMIFINAIS.'){
		
	for(j = 0; j < rodadas[14].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
		$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
		
		if(rodadas[14].Jogos[j].sNmMandante != ""){
		
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[14].Jogos[j].sDiaSemana +', '+ rodadas[14].Jogos[j].sData +' - Jogo: '+ rodadas[14].Jogos[j].sJogo);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[14].Jogos[j].sNmMandante);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[14].Jogos[j].sLogoMandante +')');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[14].Jogos[j].iGolsMandante +' x '+ rodadas[14].Jogos[j].iGolsVisitante);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[14].Jogos[j].sLogoVisitante +')');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[14].Jogos[j].sNmVisitante);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[14].Jogos[j].sEstadio +' - '+ rodadas[14].Jogos[j].sCidade);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[14].Jogos[j].sJogo);
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
//End - Inserir jogos nas rodadas - SEMI FINAIS

//Start - Inserir jogos nas rodadas - SEMI FINAIS
if(rodadas[15].sRodada == 'IDA FINAIS'){

	for(j = 0; j < rodadas[15].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
		$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
		
		if(rodadas[15].Jogos[j].sNmMandante != ""){
		
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[15].Jogos[j].sDiaSemana +', '+ rodadas[15].Jogos[j].sData +' - Jogo: '+ rodadas[15].Jogos[j].sJogo);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[15].Jogos[j].sNmMandante);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[15].Jogos[j].sLogoMandante +')');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[15].Jogos[j].iGolsMandante +' x '+ rodadas[15].Jogos[j].iGolsVisitante);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[15].Jogos[j].sLogoVisitante +')');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[15].Jogos[j].sNmVisitante);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[15].Jogos[j].sEstadio +' - '+ rodadas[15].Jogos[j].sCidade);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[15].Jogos[j].sJogo);
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
if(rodadas[16].sRodada == 'VOLTA FINAIS'){
		
	for(j = 0; j < rodadas[16].Jogos.length; j++){
		
		contador_jogo = Number(j + 1);
		
		$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
		$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
		
		if(rodadas[16].Jogos[j].sNmMandante != ""){
		
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[16].Jogos[j].sDiaSemana +', '+ rodadas[16].Jogos[j].sData +' - Jogo: '+ rodadas[16].Jogos[j].sJogo);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[16].Jogos[j].sNmMandante);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[16].Jogos[j].sLogoMandante +')');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[16].Jogos[j].iGolsMandante +' x '+ rodadas[16].Jogos[j].iGolsVisitante);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[16].Jogos[j].sLogoVisitante +')');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[16].Jogos[j].sNmVisitante);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[16].Jogos[j].sEstadio +' - '+ rodadas[16].Jogos[j].sCidade);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('<a href="sumula.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato=341&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">Súmula do jogo</a>');
		
		}else{
			
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[16].Jogos[j].sJogo);
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
			$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn').html('Súmula do jogo');
			
		}
		
	}
	
}
//End - Inserir jogos nas rodadas - SEMI FINAIS

//End - RODADAS

//Start - ARTILHARIA

//Start - JSON Artilharia
artilharia = [
   {
      "sNmJogador":"GASTÓN RODRIGUEZ MAESO",
      "sApelido":"GASTÓN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/80150249942_43_gastan.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"JOAO PAULO FERREIRA LOURENCO",
      "sApelido":"LOURENÇO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02169466622_20_lourenco.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"VINICIUS RAYAN PEREIRA DOS SANTOS",
      "sApelido":"RAYAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/00057528179_11_Foto.JPG",
      "sClube":"TUBARÃO",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png"
   },
   {
      "sNmJogador":"NICHOLAS DE SOUZA LENCZCZAK",
      "sApelido":"NICHOLAS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/03329566019_66_Nicholas.jpg",
      "sClube":"FIGUEIRENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"GILEARD NASCIMENTO BORGES",
      "sApelido":"GILEARD",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/60863389309_78_Foto.JPG",
      "sClube":"TUBARÃO",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png"
   },
   {
      "sNmJogador":"VINICIUS GUEDES",
      "sApelido":"GUEDES",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02105689094_94_Guedes.jpg",
      "sClube":"CHAPECOENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"JOAO CARLOS BARROS LOPES",
      "sApelido":"JOAO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/10451043960_33_Joao.JPG",
      "sClube":"CRICIÚMA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"JANDIR BRENO SOUZA SILVA",
      "sApelido":"JANDIR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09963560610_91_Jaja2.jpg",
      "sClube":"CRICIÚMA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"ADRIANO SOARES FILGUEIRA",
      "sApelido":"ADRIANO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/00519376110_33_ADRIANO.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"VITOR CORREIA DA SILVA",
      "sApelido":"VITOR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/45781248862_8_FEIJaO.jpg",
      "sClube":"FIGUEIRENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"GUSTAVO BRANDENBURG",
      "sApelido":"GUSTAVO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09120380984_28_3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"RODRIGO FERREIRA DA SILVA",
      "sApelido":"",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/44266070861_21_wel.jpeg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"JOSE MARCOS ALVES LUIS",
      "sApelido":"ZÉ MARCOS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/10183190939_57_ZeMarcos.JPG",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"LEONARDO MATTOS DA SILVA",
      "sApelido":"DA SILVA",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/03029021041_63_dasilva.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"DANIEL LOPES DE ANDRADE",
      "sApelido":"DANDAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/14102583785_99_Dandan.jpg",
      "sClube":"BRUSQUE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"LUCAS ITAMIR DE SA",
      "sApelido":"LUCAS DE SÁ",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09373388932_16_foto3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"PAULO ROBERTO MOCCELIN",
      "sApelido":"PAULO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/03031938089_55_Paulo.jpg",
      "sClube":"CHAPECOENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"ANDERSON RODRIGUES DA LUZ",
      "sApelido":"ANDERSON LIGEIRO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/42862699810_18_LIG.jpg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"AYLON DARWIN TAVELLA",
      "sApelido":"AYLON",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02003042083_98_29.png",
      "sClube":"CHAPECOENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"MIKAEL GUTERRES MICHEL",
      "sApelido":"MIKAEL",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/82036519091_17_MIKAEL.jpeg",
      "sClube":"JUVENTUS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"GUILHERME SEEFELDT KROLOW",
      "sApelido":"FOGUINHO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02412125023_43_Foguinho.JPG",
      "sClube":"CRICIÚMA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"WANDERSON FERREIRA DE OLIVEIRA",
      "sApelido":"VALDIVIA",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/03247403108_73_Valdivia.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"MATHEUS ANTUNES RIBEIRO",
      "sApelido":"MATHEUS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02738491073_92_matheus.jpg",
      "sClube":"CHAPECOENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"DIOGO LIMA CALIXTO",
      "sApelido":"DIOGO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/40535866828_65_CALIXTO.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"DENNER PAULINO BARBOSA",
      "sApelido":"DENNER",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/39746146807_31_denner.jpeg",
      "sClube":"JUVENTUS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"LUCAS RODRIGUES RAMOS DA SILVA",
      "sApelido":"LUCAS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/40569940800_71_ramos.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"RODRIGO DA ROSA MILANEZ",
      "sApelido":"RODRIGO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/06754002956_34_Rodrigo.JPG",
      "sClube":"CRICIÚMA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"IANSON ACOSTA SOARES",
      "sApelido":"IANSON",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02949153038_17_Ianson.png",
      "sClube":"BRUSQUE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"WALLACE SANTOS ACIOLI",
      "sApelido":"WALLACE ACIOLI",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09941776407_4_311161.jpg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"ANDREW LUCAS BALBINO DRUMMOND",
      "sApelido":"ANDREW",
      "sFoto":"http://egol.fcf.com.br/sisgol/arbitros/semfoto.png",
      "sClube":"CRICIÚMA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"ROBERT ALEXANDRE FISCHER",
      "sApelido":"ROBERT",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/08261968960_97_foto3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"MATHEUS TRINDADE GONÇALVES",
      "sApelido":"MATHEUS TRINDADE",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/14528440709_3_foto3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"DAVI XAVIER LOPES DOS SANTOS",
      "sApelido":"DAVI LOPES",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/36476591851_44_Foto.JPG",
      "sClube":"TUBARÃO",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png"
   },
   {
      "sNmJogador":"AIRTON TIRABASSI",
      "sApelido":"AIRTON",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/39839712888_57_Airton.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"CHARLES LUIS REITER",
      "sApelido":"CHARLES",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/05318387900_92_3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"PEDRO HENRIQUE DE CASTRO SILVA",
      "sApelido":"PEDRO CASTRO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/13864209722_42_pcastro.png",
      "sClube":"AVAÍ",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"TITO FERNANDO DA SILVA PINTO",
      "sApelido":"TITO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02883304122_7_TITO.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"TULIO RENAN SOUZA XAVIER",
      "sApelido":"TULIO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/04051545504_28_foto.jpg",
      "sClube":"JUVENTUS",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"DIEGO FELIPE COUTINHO",
      "sApelido":"DIEGO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/13453113705_22_DIEGO.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"RAFAEL BERGER",
      "sApelido":"ALEMÃO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/11563324784_88_Rafael.jpg",
      "sClube":"FIGUEIRENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"EDSON RAMOS DA SILVA",
      "sApelido":"EDSON",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/06389033435_75_3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"MARCO ANTONIO DE MATTOS FILHO",
      "sApelido":"MARCO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/00357997069_8_foto15.jpeg",
      "sClube":"FIGUEIRENSE",
      "iGols":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"JOSE VITOR DOS SANTOS SILVA",
      "sApelido":"ZÉ VITOR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/07614054539_43_Ze.JPG",
      "sClube":"TUBARÃO",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png"
   },
   {
      "sNmJogador":"VINICIUS XAVIER DA PURIFICAÇÃO MOUTINHO",
      "sApelido":"VINIICUS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/14302644621_35_vini.jpg",
      "sClube":"CHAPECOENSE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"FERNANDO JOSE MARQUES MACIEL",
      "sApelido":"FERNANDINHO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/60518860361_24_3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"GEOVANE SANTANA SOUZA",
      "sApelido":"GEOVANE",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/06899348586_7_foto.jpg",
      "sClube":"JUVENTUS",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"DIEGO GONÇALVES",
      "sApelido":"DIEGO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/43621845895_80_DIEGO.jpg",
      "sClube":"FIGUEIRENSE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"WILLIAN DOS SANTOS MEDINA",
      "sApelido":"WILLIAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/10971160694_32_foto.jpg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"PEDRO LUCAS SCHWAIZER",
      "sApelido":"PEDRO LUCAS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/01008262021_81_PEDRO.jpg",
      "sClube":"FIGUEIRENSE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   },
   {
      "sNmJogador":"RILDO DE ANDRADE FELICISSIMO",
      "sApelido":"RILDO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/39442218859_75_Rildo.png",
      "sClube":"AVAÍ",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"NATHAN DO REGO FERREIRA",
      "sApelido":"NATHAN FERREIRA",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/41050416813_97_Nat.jpeg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"DERLAN DE OLIVEIRA BENTO",
      "sApelido":"DERLAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/14534458703_3_derlan.jpg",
      "sClube":"CHAPECOENSE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"MARCO ANTONIO MILITAO JUNIOR",
      "sApelido":"MARCO ANTONIO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02066907030_37_Marco.jpg",
      "sClube":"BRUSQUE",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"ROBERTO NASCIMENTO DOS SANTOS",
      "sApelido":"ROBERTO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/06062098913_39_RP.jpeg",
      "sClube":"MARCÍLIO DIAS",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"FABIO SOUZA DOS SANTOS",
      "sApelido":"FABINHO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/32028135875_21_Fabio.jpeg",
      "sClube":"JUVENTUS",
      "iGols":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"MOISES VIEIRA DA VEIGA",
      "sApelido":"MOISES",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/11507889925_27_moises.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":3,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"JONATHAN LUIZ MOREIRA ROSA JÚNIOR",
      "sApelido":"JONATHAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/03324571090_96_jhonatan99.png",
      "sClube":"AVAÍ",
      "iGols":3,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"LUIZ CARLOS MARQUES LIMA",
      "sApelido":"THIAGO ALAGOANO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09045865459_54_Thiago.jpg",
      "sClube":"BRUSQUE",
      "iGols":3,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"MARLLON DOS SANTOS PEREIRA",
      "sApelido":"MARLLON",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02497725314_9_Marllon.jpeg",
      "sClube":"JUVENTUS",
      "iGols":3,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"LEONARDO DE OLIVEIRA CLEMENTE MARTINS",
      "sApelido":"LÉO ITAPERUNA",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/12508317764_64_LEONARD.jpg",
      "sClube":"CONCÓRDIA",
      "iGols":3,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"LUCAS HENRIQUE DOS SANTOS",
      "sApelido":"LUQUINHAS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/09351107477_83_foto3x4.jpg",
      "sClube":"JOINVILLE",
      "iGols":4,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"CARLOS CESAR NEVES",
      "sApelido":"CARLOS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/05700592916_62_Carlos.jpg",
      "sClube":"CRICIÚMA",
      "iGols":4,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"EDUARDO NASCIMENTO DA SILVA JUNIOR",
      "sApelido":"EDUARDO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/14364025739_95_Edu2.jpg",
      "sClube":"BRUSQUE",
      "iGols":6,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   }
]

artilharia.sort(function (a, b){
	return a.iGols < b.iGols;
});
//End - JSON Artilharia

//Start - Objeto Artilharia em console
console.log("Artilharia");
for(i = 0; i < artilharia.length; i++){
	console.log(artilharia[i]);
}
//End - Objeto Artilharia em console

//Start - Inserir artilheiros
for(i = 0; i <= 5; i++){
	
	contador_artilheiro = Number(i + 1);
	$('.artilheiro'+ contador_artilheiro +' > .estatisticas-tabela-linha-body-clube').css('background-image', 'url('+ artilharia[i].sLogo +')');
	$('.artilheiro'+ contador_artilheiro +' > .estatisticas-tabela-linha-body-gols').html(artilharia[i].iGols);
	$('.artilheiro'+ contador_artilheiro +' > .estatisticas-tabela-linha-body-foto').css('background-image', 'url('+ artilharia[i].sFoto +')');
	$('.artilheiro'+ contador_artilheiro +' > .estatisticas-tabela-linha-body-nome').html(artilharia[i].sNmJogador);
	$('.artilheiro'+ contador_artilheiro +' > .estatisticas-tabela-linha-body-apelido').html(artilharia[i].sApelido);

}
//End - Inserir artilheiros

//End - ARTILHARIA

//Start - GOLEIRO MENOS VAZADO

//Start - JSON Goleiro
goleiro = [
   {
      "sNmJogador":"AGENOR DETOFOL",
      "sApelido":"AGENOR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/00853693064_18_Agenor.jpg",
      "sClube":"CRICIÚMA",
      "nMedia":0,
      "nParticipacao":0.22222222,
      "iGols":0,
      "iAtuacoes":0,
      "iTotalJogos":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"APARECIDO BELLIATO JUNIOR",
      "sApelido":"BELLIATO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/06985284922_18_ABJ.jpeg",
      "sClube":"MARCÍLIO DIAS",
      "nMedia":1,
      "nParticipacao":1,
      "iGols":9,
      "iAtuacoes":0,
      "iTotalJogos":9,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/marciliodias.png"
   },
   {
      "sNmJogador":"ASSIS GIOVANAZ",
      "sApelido":"ASSIS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/01773084003_49_ASSISFT.png",
      "sClube":"JUVENTUS",
      "nMedia":1.33333333,
      "nParticipacao":0.66666666,
      "iGols":8,
      "iAtuacoes":0,
      "iTotalJogos":6,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"EDER DONIZETE DUARTE DE OLIVEIRA",
      "sApelido":"EDER",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/30969472870_88_EDER.jpg",
      "sClube":"CONCÓRDIA",
      "nMedia":1.75,
      "nParticipacao":0.44444444,
      "iGols":7,
      "iAtuacoes":0,
      "iTotalJogos":4,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"EMANUEL SILVA SOUZA",
      "sApelido":"EMANUEL",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/39734554816_68_EMAN.jpeg",
      "sClube":"JUVENTUS",
      "nMedia":0,
      "nParticipacao":0.11111111,
      "iGols":0,
      "iAtuacoes":0,
      "iTotalJogos":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"EUDES RUAN DE SOUSA CARNEIRO",
      "sApelido":"RUAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02607963109_84_Ruan2.jpeg",
      "sClube":"BRUSQUE",
      "nMedia":1,
      "nParticipacao":0.11111111,
      "iGols":1,
      "iAtuacoes":0,
      "iTotalJogos":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"GILSIVAN SOARES DA SILVA",
      "sApelido":"IVAN",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/35619829804_58_Semtitulo1.jpg",
      "sClube":"JOINVILLE",
      "nMedia":1.88888888,
      "nParticipacao":1,
      "iGols":17,
      "iAtuacoes":0,
      "iTotalJogos":9,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Joinville.png"
   },
   {
      "sNmJogador":"GIOVANNI SILVA TIEPO",
      "sApelido":"GIOVANNI",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/08279555960_10_31.png",
      "sClube":"CHAPECOENSE",
      "nMedia":1,
      "nParticipacao":0.11111111,
      "iGols":1,
      "iAtuacoes":0,
      "iTotalJogos":1,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"HUDSON MOURA DA SILVA JUNIOR",
      "sApelido":"HUDSON JUNIOR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/40621397822_79_HUDSON.jpeg",
      "sClube":"JUVENTUS",
      "nMedia":1,
      "nParticipacao":0.22222222,
      "iGols":2,
      "iAtuacoes":0,
      "iTotalJogos":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/JUVENTUS.png"
   },
   {
      "sNmJogador":"IGOR HENRIQUE PEREIRA DE CAMPOS",
      "sApelido":"IGOR",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/10028478932_45_Igorcampos.jpg",
      "sClube":"CONCÓRDIA",
      "nMedia":1,
      "nParticipacao":0.55555555,
      "iGols":5,
      "iAtuacoes":0,
      "iTotalJogos":5,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CONCORDIA.png"
   },
   {
      "sNmJogador":"JOAO RICARDO RIEDI",
      "sApelido":"JOAO",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/01908736046_95_23.png",
      "sClube":"CHAPECOENSE",
      "nMedia":0.625,
      "nParticipacao":0.88888888,
      "iGols":5,
      "iAtuacoes":0,
      "iTotalJogos":8,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Chapecoense.png"
   },
   {
      "sNmJogador":"JOSE CARLOS DOS ANJOS SAVIO",
      "sApelido":"ZÉ CARLOS",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/05210339939_80_3.jpg",
      "sClube":"BRUSQUE",
      "nMedia":0.5,
      "nParticipacao":0.66666666,
      "iGols":3,
      "iAtuacoes":0,
      "iTotalJogos":6,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"KLEUDSON JOSE MARTINS OLIVEIRA",
      "sApelido":"DIDA",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/01849518106_88_Dida.jpeg",
      "sClube":"BRUSQUE",
      "nMedia":2.5,
      "nParticipacao":0.22222222,
      "iGols":5,
      "iAtuacoes":0,
      "iTotalJogos":2,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/Brusque.png"
   },
   {
      "sNmJogador":"LEE WINSTON LEANDRO DA SILVA OLIVEIRA",
      "sApelido":"LEE",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/35328195892_41_Lee.JPG",
      "sClube":"TUBARÃO",
      "nMedia":1.55555555,
      "nParticipacao":1,
      "iGols":14,
      "iAtuacoes":0,
      "iTotalJogos":9,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/TUBARAO.png"
   },
   {
      "sNmJogador":"LUCAS HENRIQUE FRIGERI",
      "sApelido":"LUCAS FRIGERI",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/37618131805_67_Frigeri.JPG",
      "sClube":"AVAÍ",
      "nMedia":0.66666666,
      "nParticipacao":1,
      "iGols":6,
      "iAtuacoes":0,
      "iTotalJogos":9,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/avai.png"
   },
   {
      "sNmJogador":"PAULO HENRIQUE GIANEZINI",
      "sApelido":"PAULO HENRIQUE",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/02123999008_11_Paulo.JPG",
      "sClube":"CRICIÚMA",
      "nMedia":1.28571428,
      "nParticipacao":0.77777777,
      "iGols":9,
      "iAtuacoes":0,
      "iTotalJogos":7,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/CRICIUMA.png"
   },
   {
      "sNmJogador":"SIDNEY APARECIDO RAMOS DA SILVA",
      "sApelido":"SIDNEY",
      "sFoto":"http://egol.fcf.com.br/sesp/Images/31682599850_94_SIDaO.jpg",
      "sClube":"FIGUEIRENSE",
      "nMedia":0.44444444,
      "nParticipacao":1,
      "iGols":4,
      "iAtuacoes":0,
      "iTotalJogos":9,
      "sLogo":"http://egol.fcf.com.br/SESP/ClubeLigas/FIGUEIRENSE.png"
   }
];

goleiro.sort(function (a, b){
	return a.iGols > b.iGols;
});
//End - JSON Goleiro

//Start - Objeto Goleiro em console
console.log("Goleiro Menos Vazado");
for(i = 0; i < goleiro.length; i++){
	console.log(goleiro[i]);
}
//End - Objeto Goleiro em console

//Start - Inserir goleiros
for(i = 0; i < 5; i++){
	
	contador_goleiro = Number(i + 1);
	$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-linha-body-clube').css('background-image', 'url('+ goleiro[i].sLogo +')');
	$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-linha-body-gols').html(goleiro[i].iGols);
	$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-linha-body-foto').css('background-image', 'url('+ goleiro[i].sFoto +')');
	$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-linha-body-nome').html(goleiro[i].sNmJogador);
	$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-linha-body-apelido').html(goleiro[i].sApelido);

}
//End - Inserir goleiros

//End - GOLEIRO MENOS VAZADO

//Start - DOCUMENTOS
$(".doc-btn1").click(function(){
	$(".tela1").addClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").addClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn2").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").addClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").addClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn3").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").addClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").addClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn4").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").addClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").addClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn5").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").addClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").addClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn6").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").addClass('documentos-tela-on');
	$(".tela7").removeClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").addClass('documentos-barra-btn-on');
	$(".doc-btn7").removeClass('documentos-barra-btn-on');
});
$(".doc-btn7").click(function(){
	$(".tela1").removeClass('documentos-tela-on');
	$(".tela2").removeClass('documentos-tela-on');
	$(".tela3").removeClass('documentos-tela-on');
	$(".tela4").removeClass('documentos-tela-on');
	$(".tela5").removeClass('documentos-tela-on');
	$(".tela6").removeClass('documentos-tela-on');
	$(".tela7").addClass('documentos-tela-on');
	
	$(".doc-btn1").removeClass('documentos-barra-btn-on');
	$(".doc-btn2").removeClass('documentos-barra-btn-on');
	$(".doc-btn3").removeClass('documentos-barra-btn-on');
	$(".doc-btn4").removeClass('documentos-barra-btn-on');
	$(".doc-btn5").removeClass('documentos-barra-btn-on');
	$(".doc-btn6").removeClass('documentos-barra-btn-on');
	$(".doc-btn7").addClass('documentos-barra-btn-on');
});
//End - DOCUMENTOS

//Start - SÚMULA

//Start - PEGAR DADOS DA URL
url = window.location.href;
parametros_da_url = url.split('&');

if(parametros_da_url.length > 1){

	console.log('dados da url:');
	console.log(parametros_da_url);
	
	iAno_full = parametros_da_url[1].split('=');
	iAno = iAno_full[1];
	console.log('iAno:');
	console.log(iAno);
	
	iCampeonato_full = parametros_da_url[2].split('=');
	iCampeonato = iCampeonato_full[1];
	console.log('iCampeonato:');
	console.log(iCampeonato);
	
	iJogo_full = parametros_da_url[3].split('=');
	iJogo = iJogo_full[1];
	console.log('iJogo:');
	console.log(iJogo);

	/*Start - Sumula Banner*/
	$('.sumula-banner-box-jogo').html('Jogo: '+ sumula.sNrJogo);
	$('.sumula-banner-box-data').html(sumula.sData +' '+ sumula.sHora);
	$('.sumula-banner-box-nome-mandante').html(sumula.sTimeMandante);
	$('.sumula-banner-box-escudo-mandante').css('background-image', 'url('+ sumula.sLogoMandante +')');
	$('.sumula-banner-box-resultado-normal').html(sumula.sPlacar);
	if(sumula.sPlacarPenaltis != "0 X 0"){$('.sumula-banner-box-resultado-penaltis').html(sumula.sPlacarPenaltis);}
	$('.sumula-banner-box-escudo-visitante').css('background-image', 'url('+ sumula.sLogoVisitante +')');
	$('.sumula-banner-box-nome-visitante').html(sumula.sTimeVisitante);
	$('.sumula-banner-box-local').html(sumula.sLocal);
	/*End - Sumula Banner*/
	
	/*Start - Sumula*/
	$('.sumula-titulo-jogo').html('Jogo: '+ sumula.sNrJogo);
	$('.sumula-publicacao').html('Súmula publicada em '+ sumula.sData +' - '+ sumula.sHora);
	$('.sumula-campeonato').html(sumula.sCampeonato);
	$('.sumula-fase').html(sumula.sFase);
	$('.sumula-rodada').html(sumula.sRodada);
	$('.sumula-nome-jogo').html(sumula.sJogo);
	$('.sumula-placar').html(sumula.sPlacar);
	$('.sumula-data').html(sumula.sData);
	$('.sumula-hora').html(sumula.sHora);
	$('.sumula-local').html(sumula.sLocal);
	$('.sumula-arbitro').html(sumula.sArbitro);
	$('.sumula-assistente1').html(sumula.sArbAssist1);
	$('.sumula-assistente2').html(sumula.sArbAssist2);
	$('.sumula-quarto-arbitro').html(sumula.sQuartoArb);
	$('.sumula-delegado').html(sumula.sDelegado);
	$('.sumula-inspetor').html(sumula.sInspetor);
	$('.sumula-entrada-mandante').html(sumula.EntMandante.sEntrada1Tempo);
	$('.sumula-entrada-mandante-atraso').html(sumula.EntMandante.sAtraso1Tempo);
	$('.sumula-entrada-mandante02').html(sumula.EntMandante.sEntrada2Tempo);
	$('.sumula-entrada-mandante-atraso02').html(sumula.EntMandante.sAtraso2Tempo);
	$('.sumula-entrada-visitante').html(sumula.EntVisitante.sEntrada1Tempo);
	$('.sumula-entrada-visitante-atraso').html(sumula.EntVisitante.sAtraso1Tempo);
	$('.sumula-entrada-visitante02').html(sumula.EntVisitante.sEntrada2Tempo);
	$('.sumula-entrada-visitante-atraso02').html(sumula.EntVisitante.sAtraso2Tempo);
	$('.sumula-inicio-1tempo').html(sumula.sInicio1Tempo);
	$('.sumula-atraso-1tempo').html(sumula.sAtraso1Tempo);
	$('.sumula-inicio-2tempo').html(sumula.sInicio2Tempo);
	$('.sumula-atraso-2tempo').html(sumula.sAtraso2Tempo);
	$('.sumula-final-1tempo').html(sumula.sTermino1Tempo);
	$('.sumula-final-2tempo').html(sumula.sTermino2Tempo);
	$('.sumula-acrescimo-1tempo').html(sumula.sAcrecimo1Tempo);
	$('.sumula-acrescimo-2tempo').html(sumula.sAcrecimo2Tempo);
	$('.sumula-nome-mandante').html(sumula.sTimeMandante);
	$('.sumula-nome-visitante').html(sumula.sTimeVisitante);
	for(i = 0; i < sumula.TimeMandante.length; i++){
		$('.sumula-jogadores-mandante tbody').append(
			'<tr>'+
				'<td>'+sumula.TimeMandante[i].sNumero+'</td>'+
				'<td><div class="sumula-jogadores-mandante-foto" style="background-image:url('+sumula.TimeMandante[i].sFoto+')"></div>'+sumula.TimeMandante[i].sJogador+'</td>'+
				'<td>'+sumula.TimeMandante[i].sTipo+'</td>'+
				'<td>'+sumula.TimeMandante[i].sBid+'</td>'+
			'</tr>'
		);
	}
	for(i = 0; i < sumula.TimeVisitante.length; i++){
		$('.sumula-jogadores-visitante tbody').append(
			'<tr>'+
				'<td>'+sumula.TimeVisitante[i].sNumero+'</td>'+
				'<td><div class="sumula-jogadores-visitante-foto" style="background-image:url('+sumula.TimeVisitante[i].sFoto+')"></div>'+sumula.TimeVisitante[i].sJogador+'</td>'+
				'<td>'+sumula.TimeVisitante[i].sTipo+'</td>'+
				'<td>'+sumula.TimeVisitante[i].sBid+'</td>'+
			'</tr>'
		);
	}
	$('.sumula-capitao-mandante').html(sumula.sCapitaoMandante);
	$('.sumula-capitao-visitante').html(sumula.sCapitaoVisitante);
	$('.sumula-comissao-mandante-treinador').html(sumula.ComissaoTecnicaMandante[0].sNome);
	$('.sumula-comissao-mandante-auxiliar').html(sumula.ComissaoTecnicaMandante[1].sNome);
	$('.sumula-comissao-mandante-preparador').html(sumula.ComissaoTecnicaMandante[2].sNome);
	$('.sumula-comissao-mandante-treinador-goleiro').html(sumula.ComissaoTecnicaMandante[3].sNome);
	$('.sumula-comissao-mandante-medico').html(sumula.ComissaoTecnicaMandante[4].sNome);
	$('.sumula-comissao-mandante-massagista').html(sumula.ComissaoTecnicaMandante[5].sNome);
	$('.sumula-comissao-visitante-treinador').html(sumula.ComissaoTecnicaVisitante[0].sNome);
	$('.sumula-comissao-visitante-auxiliar').html(sumula.ComissaoTecnicaVisitante[1].sNome);
	$('.sumula-comissao-visitante-preparador').html(sumula.ComissaoTecnicaVisitante[2].sNome);
	$('.sumula-comissao-visitante-treinador-goleiro').html(sumula.ComissaoTecnicaVisitante[3].sNome);
	$('.sumula-comissao-visitante-medico').html(sumula.ComissaoTecnicaVisitante[4].sNome);
	$('.sumula-comissao-visitante-massagista').html(sumula.ComissaoTecnicaVisitante[5].sNome);
	for(i = 0; i < sumula.GolsDaRodada.length; i++){
		$('.sumula-tabela-gols tbody').append(
			'<tr>'+
				'<td>'+sumula.GolsDaRodada[i].sMinuto+'</td>'+
				'<td>'+sumula.GolsDaRodada[i].sTempo+'</td>'+
				'<td>'+sumula.GolsDaRodada[i].sNrJogador+'</td>'+
				'<td>'+sumula.GolsDaRodada[i].sTipo+'</td>'+
				'<td><div class="sumula-gols-foto" style="background-image:url('+sumula.GolsDaRodada[i].sFotoJogador+')"></div>'+sumula.GolsDaRodada[i].sNomeJogador+'</td>'+
				'<td><div class="sumula-gols-escudo" style="background-image:url('+sumula.GolsDaRodada[i].sLogoClube+')"></div>'+sumula.GolsDaRodada[i].sNomeClube+'</td>'+
			'</tr>'
		);
	}
	if(sumula.GolsDaRodada.length == 0){$('.sumula-tabela-gols tbody').append('<tr><td colspan="6">Jogo sem gols</td></tr>');}
	for(i = 0; i < sumula.CartoesAmarelos.length; i++){
		$('.sumula-cartoes-amarelos tbody').append(
			'<tr>'+
				'<td>'+sumula.CartoesAmarelos[i].sMinuto+'</td>'+
				'<td>'+sumula.CartoesAmarelos[i].sTempo+'</td>'+
				'<td>'+sumula.CartoesAmarelos[i].sNrJogador+'</td>'+
				'<td>'+sumula.CartoesAmarelos[i].sNomeJogador+'</td>'+
				'<td>'+sumula.CartoesAmarelos[i].sMotivo+'</td>'+
				'<td>'+sumula.CartoesAmarelos[i].sNomeClube+'</td>'+
			'</tr>'
		);
	}
	if(sumula.CartoesAmarelos.length == 0){$('.sumula-cartoes-amarelos tbody').append('<tr><td colspan="6">Nada Consta</td></tr>');}
	for(i = 0; i < sumula.CartoesVermelhos.length; i++){
		$('.sumula-cartoes-vermelhos tbody').append(
			'<tr>'+
				'<td>'+sumula.CartoesVermelhos[i].sMinuto+'</td>'+
				'<td>'+sumula.CartoesVermelhos[i].sTempo+'</td>'+
				'<td>'+sumula.CartoesVermelhos[i].sNrJogador+'</td>'+
				'<td>'+sumula.CartoesVermelhos[i].sNomeJogador+'</td>'+
				'<td>'+sumula.CartoesVermelhos[i].sMotivo+'</td>'+
				'<td>'+sumula.CartoesVermelhos[i].sNomeClube+'</td>'+
			'</tr>'
		);
	}
	if(sumula.CartoesVermelhos.length == 0){$('.sumula-cartoes-vermelhos tbody').append('<tr><td colspan="6">Nada Consta</td></tr>');}
	for(i = 0; i < sumula.PenalMembComissaoTecn.length; i++){
		$('.sumula-penalidades-comissao tbody').append(
			'<tr>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sMinuto+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sTempo+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sNumero+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sNome+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sMotivo+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sNomeClube+'</td>'+
				'<td>'+sumula.PenalMembComissaoTecn[i].sCartao+'</td>'+
			'</tr>'
		);
	}
	if(sumula.PenalMembComissaoTecn.length == 0){$('.sumula-penalidades-comissao tbody').append('<tr><td colspan="7">Nada Consta</td></tr>');}
	$('.sumula-observacoes').html(sumula.sOcorrenciasObs);
	$('.sumula-motivo-atraso').html(sumula.sMotivoAtraso);
	$('.sumula-observacoes-eventuais').html(sumula.sObservacoesEventuais);
	for(i = 0; i < sumula.Subistituicoes.length; i++){
		$('.sumula-substituicoes tbody').append(
			'<tr>'+
				'<td>'+sumula.Subistituicoes[i].sMinuto+'</td>'+
				'<td>'+sumula.Subistituicoes[i].sTempo+'</td>'+
				'<td><div class="sumula-gols-escudo" style="background-image:url('+sumula.Subistituicoes[i].sLogoClube+')"></div>'+sumula.Subistituicoes[i].sNomeClube+'</td>'+
				'<td><div class="sumula-gols-foto" style="background-image:url('+sumula.Subistituicoes[i].sEntrouFoto+')"></div>'+sumula.Subistituicoes[i].sEntrou+'</td>'+
				'<td><div class="sumula-gols-foto" style="background-image:url('+sumula.Subistituicoes[i].sSaiuFoto+')"></div>'+sumula.Subistituicoes[i].sSaiu+'</td>'+
			'</tr>'
		);
	}
	if(sumula.GolsDaRodada.length == 0){$('.sumula-tabela-gols tbody').append('<tr><td colspan="6">Jogo sem gols</td></tr>');}
	/*End - Sumula*/

}
//End - PEGAR DADOS DA URL

//End - SÚMULA