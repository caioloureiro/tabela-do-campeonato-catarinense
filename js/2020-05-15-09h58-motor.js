//Start - LINKS IMPORTANTES
/*
http://egol.fcf.com.br/sesp/WsEgol.wso
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_GoleiroMenosVazado/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Sumula/JSON/debug?iAno=2020&iCampeonato=341&iJogo=40
Ai é só clicar no metodo e vai abrir uma tela assim, informe o ano e campeonato e clique em Click Here para ter o link do json

https://caioloureiro.orgfree.com/fcf

OFFLINE:
http://localhost:8080/fcf/

VADER:
http://vader.streamsoft.com.br/noxwebcliente/fcf/
E:\dataflex\Nox\NOXWeb\AppHtml\fcf
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

//Start - PEGANDO OS DADOS DA URL
url = window.location.href;
parametros_da_url = url.split('&');
iAno = 2020;
iCampeonato = 341;
//End - PEGANDO OS DADOS DA URL

$(document).ready(function (){
	
	//Start - TABELA
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'tabela.json',
		success: function(retorno){

			//console.log(retorno);
			tabela = retorno;

			//Start - Clubes Participantes
			//console.log("Clubes Participantes");
			for(i = 0; i < tabela[0].Tabela.length; i++){
				//console.log(tabela[0].Tabela[i].sNome_Clube);
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
		}
		
	});
	//End - TABELA

	//Start - RODADAS
	$.ajax({
		dataType: "json",
		method: "GET",
		//url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		url: 'rodadas.json',
		success: function(retorno){
			
			//console.log(retorno);
			rodadas = retorno;
			
			//Start - Carrossel Rodadas
			hoje = new Date();
			//console.log('hoje: '+ String(hoje));
			//console.log(rodadas[0].Jogos[0].sSumula);

			dia_da_rodada01 = rodadas[0].Jogos[0].sData.substr(0,2);
			mes_da_rodada01 = rodadas[0].Jogos[0].sData.substr(3,2);
			ano_da_rodada01 = rodadas[0].Jogos[0].sData.substr(6,4);
			hora_da_rodada01 = '23:59:59';
			data_da_rodada01 = new Date(mes_da_rodada01 +'/'+ dia_da_rodada01 +'/'+ ano_da_rodada01 +' '+ hora_da_rodada01);//mm/dd/YYYY hh:mm:ss
			//console.log('data_da_rodada01: '+ data_da_rodada01);
			if(rodadas[0].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 1ª rodada.');
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
			//console.log('data_da_rodada02: '+ data_da_rodada02);
			if(rodadas[1].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 2ª rodada.');
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
			//console.log('data_da_rodada03: '+ data_da_rodada03);
			if(rodadas[2].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 3ª rodada.');
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
			//console.log('data_da_rodada04: '+ data_da_rodada04);
			if(rodadas[3].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 4ª rodada.');
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
			//console.log('data_da_rodada05: '+ data_da_rodada05);
			if(rodadas[4].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 5ª rodada.');
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
			//console.log('data_da_rodada06: '+ data_da_rodada06);
			if(rodadas[5].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 6ª rodada.');
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
			//console.log('data_da_rodada07: '+ data_da_rodada07);
			if(rodadas[6].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 7ª rodada.');
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
			//console.log('data_da_rodada08: '+ data_da_rodada08);
			if(rodadas[7].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 8ª rodada.');
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
			//console.log('data_da_rodada09: '+ data_da_rodada09);
			if(rodadas[8].Jogos[4].sSumula == 'NAO'){

				//console.log('Estamos na 9ª rodada.');
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
			//console.log('data_da_rodada_quartas_ida: '+ data_da_rodada_quartas_ida);
			if(rodadas[9].Jogos[3].sSumula == 'NAO'){

				//console.log('Estamos nas Quartas de Final - IDA.');
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
			//console.log('data_da_rodada_quartas_volta: '+ data_da_rodada_quartas_volta);
			if(rodadas[10].Jogos[3].sSumula == 'NAO'){

				//console.log('Estamos nas Quartas de Final - VOLTA.');
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
			//console.log('data_da_rodada_descenso_ida: '+ data_da_rodada_descenso_ida);
			if(rodadas[11].Jogos[0].sSumula == 'NAO'){

				//console.log('Estamos na rodada de Descenso - IDA.');
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
			//console.log('data_da_rodada_descenso_volta: '+ data_da_rodada_descenso_volta);
			if(rodadas[12].Jogos[0].sSumula == 'NAO'){

				//console.log('Estamos na rodada de Descenso - VOLTA.');
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
			//console.log('data_da_rodada_semi_ida: '+ data_da_rodada_semi_ida);
			if(rodadas[13].Jogos[1].sSumula == 'NAO'){

				//console.log('Estamos na Semi Final - IDA.');
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
			//console.log('data_da_rodada_semi_volta: '+ data_da_rodada_semi_volta);
			if(rodadas[14].Jogos[1].sSumula == 'NAO'){

				//console.log('Estamos na Semi Final - Volta.');
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
			//console.log('data_da_rodada_final_ida: '+ data_da_rodada_final_ida);
			if(rodadas[15].Jogos[0].sSumula == 'NAO'){

				//console.log('Estamos na Final - IDA.');
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
			//console.log('data_da_rodada_final_volta: '+ data_da_rodada_final_volta);
			if(rodadas[16].Jogos[0].sSumula == 'NAO'){

				//console.log('Estamos na Final - VOLTA.');
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
			//console.log("Rodadas");
			for(i = 0; i < rodadas.length; i++){
				//console.log(rodadas[i]);
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
		}
		
	});
	//End - RODADAS

	//Start - ARTILHARIA
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'artilharia.json',
		success: function(retorno){
			
			//console.log(retorno);
			artilharia = retorno;

			artilharia.sort(function (a, b){
				return a.iGols < b.iGols;
			});

			//Start - Objeto Artilharia em console
			//console.log("Artilharia");
			for(i = 0; i < artilharia.length; i++){
				//console.log(artilharia[i]);
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
		}
		
	});
	//End - ARTILHARIA

	//Start - GOLEIRO MENOS VAZADO
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_GoleiroMenosVazado/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'goleiro.json',
		success: function(retorno){
			
			//console.log(retorno);
			goleiro = retorno;
			
			goleiro.sort(function (a, b){
				return a.iGols > b.iGols;
			});
			//End - JSON Goleiro

			//Start - Objeto Goleiro em console
			//console.log("Goleiro Menos Vazado");
			for(i = 0; i < goleiro.length; i++){
				//console.log(goleiro[i]);
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
		}
		
	});
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

});