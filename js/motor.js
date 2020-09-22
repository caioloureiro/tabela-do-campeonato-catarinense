//Start - LINKS IMPORTANTES
/*
http://egol.fcf.com.br/sesp/WsEgol.wso
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_GoleiroMenosVazado/JSON/debug?iAno=2020&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Sumula/JSON/debug?iAno=2020&iCampeonato=341&iJogo=40
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_IMT/JSON/debug/JSON/debug?iAno=2020&iCampeonato=341&iJogo=31
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_RelDelegado/JSON/debug?iAno=2020&iCampeonato=341&iJogo=41
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Arbritagem/JSON/debug?iAno=2020&iCampeonato=341&iJogo=36
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube=20019&iCampeonato=341
http://egol.fcf.com.br/sesp/WsEgol.wso/Get_IdCampeonato/JSON/debug?sCampeonato=341
Ai é só clicar no metodo e vai abrir uma tela assim, informe o ano e campeonato e clique em Click Here para ter o link do json

SITE ATUAL:
http://egol.fcf.com.br/sisgol/DERW700B.asp?SelStart1=2020&SelStop1=2020&SelStart2=341&SelStop2=&SelStart3=&SelStop3=&SelStart4=&SelStop4=&SelStart5=&SelStop5=&RunReport=Run+Report

https://caioloureiro.orgfree.com/fcf

OFFLINE:
http://localhost:8080/fcf/

VADER:
http://vader.streamsoft.com.br/noxwebcliente/fcf/
E:\dataflex\Nox\NOXWeb\AppHtml\fcf

JSON Formatter:
https://jsonformatter.curiousconcept.com/
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
sumula, get_dados_da_url, documentos, parametros_da_url02;

console.log('1. Declarou as variáveis.');
//End - Variáveis

//Start - CONTADOR
var contador = 0;
var tabela_json = 0;

console.log('2. Iniciou o contador. => NUMBER:');
console.log(contador);
//End - CONTADOR

//Start - PEGANDO OS DADOS DA URL
url = window.location.href;
parametros_da_url = url.split('&');

console.log('3. Pega os dados da URL e separa. => STRING:');
console.log(url);

for (i = 0; i < 1; i++) {
	
	parametros_da_url02 = parametros_da_url[i].split('=');
	iAno = Number(parametros_da_url02[1]);
	
	console.log('3.1. iAno - Encontra o ano na URL => NUMBER:');
	console.log(iAno);
	
}

for (i = 2; i < 3; i++) {
	
	parametros_da_url02 = parametros_da_url[i].split('=');
	iCampeonato = Number(parametros_da_url02[1]);
	
	console.log('3.2. iCampeonato - Encontra o campeonato na URL => NUMBER:');
	console.log(iCampeonato);
	
}
//End - PEGANDO OS DADOS DA URL

//Start - LINKS DA PÁGINA
$('.link-artilheiro').html('<a href="artilheiro.html?sumula=1&iAno='+iAno+'&iCampeonato='+iCampeonato+'" target="_blank">VER TABELA COMPLETA</a>');
$('.link-goleiro').html('<a href="goleiro.html?sumula=1&iAno='+iAno+'&iCampeonato='+iCampeonato+'" target="_blank">VER TABELA COMPLETA</a>');
console.log('4. Cria os botões de links no HTML.');
//End - LINKS DA PÁGINA

/*Start - LIGHTBOX*/
$('.escurecer').click(function(){
	
	$('.escurecer').removeClass('on');
	$('.inscricoes').removeClass('on');
	$('.inscricoes-time').removeClass('on');
	
});
/*End - LIGHTBOX*/

/*Start - TECLADO*/
document.onkeydown = function(evt){
	evt = evt || window.event;
	var isEscape = false;
	var isEnter = false;
	if ("key" in evt){
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
		isEnter = (evt.key == "Enter" || evt.key == "Return");
	}else{
		isEscape = (evt.keyCode == 27);
		isEnter = (evt.keyCode == 13);
	}
	if (isEscape) {/*SEMPRE QUE SE PRESSIONAR ESC FAZ O QUE ESTA ABAIXO*/
		console.log('ESC');
		$('.escurecer').removeClass('on');
		$('.inscricoes').removeClass('on');
		$('.inscricoes-time').removeClass('on');
		$('.time0').removeClass('on');
		$('.time1').removeClass('on');
		$('.time2').removeClass('on');
		$('.time3').removeClass('on');
		$('.time4').removeClass('on');
		$('.time5').removeClass('on');
		$('.time6').removeClass('on');
		$('.time7').removeClass('on');
		$('.time8').removeClass('on');
		$('.time9').removeClass('on');
	}
	if (isEnter) {/*SEMPRE QUE SE PRESSIONAR ESC FAZ O QUE ESTA ABAIXO*/
		console.log('Enter');
	}
};
/*End - TECLADO*/

$(document).ready(function (){
	
	//Start - 5. CAMPEONATO
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_IdCampeonato/JSON/debug?sCampeonato='+iCampeonato,
		//url: 'campeonato.json',
		success: function(retorno){
			
			campeonato = retorno;
			
			console.log('5. campeonato.json - campeonato - Identifica os dados do campeonato através da URL => JSON:');
			console.log(campeonato);
			
			console.log('5.0.1. campeonato.json - URL de retorno:');
			console.log('http://egol.fcf.com.br/sesp/WsEgol.wso/Get_IdCampeonato/JSON/debug?sCampeonato='+iCampeonato);
			
			for(i = 0; i < campeonato.length; i++){
				
				$('.menu-select select').append('<option class="menu-select-'+campeonato[i].iAno+'" value="'+campeonato[i].iAno+'">'+campeonato[i].iAno+'</option>');
				
				if(campeonato[i].iAno == iAno){
					
					$('.menu-titulo').html(campeonato[i].sCampeonato);
					$('.footer-titulo').html(campeonato[i].sCampeonato);
					
					$('.menu-select-'+iAno).attr("selected","true");
					
					
					console.log('5.1. campeonato.json - campeonato[i].sCampeonato - Monta o select do menu => STRING:');
					console.log(campeonato[i].sCampeonato);
					
				}
				
			}
			
			$('.menu-select select').on('change', function() {

				console.log('Você mudou o ano para:'+ this.value);
				
				for(i = 0; i < campeonato.length; i++){
				
					if(campeonato[i].iAno == this.value){
						
						campeonato_novo_id = campeonato[i].iCampeonato;
						
					}
					
				}
				
				url_nova = 'campeonato.html?ano='+ this.value +'&codigo='+ this.value;
				
				window.location.href = url_nova;
				
			});
			
			contador = Number(contador + 1);
			
			console.log('5.2. campeonato.json - contador - A contagem foi modificada para o próximo passo => NUMBER:');
			console.log(contador);
			
		}
		
	});
	//End - 5. CAMPEONATO

	//Start - 6. TABELA
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'tabela.json',
		success: function(retorno){
			
			tabela = retorno;
			
			console.log('6. tabela.json - tabela - Identifica os dados da tabela => JSON:');
			console.log(tabela);
			
			console.log('6.0.1. tabela.json - URL de retorno:');
			console.log('http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Campeonato/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato);

			console.log('6.1.1. tabela.json - tabela.length:');
			console.log(tabela.length);
			
			$('.principal-tabela-carrossel').addClass('principal-tabela-carrossel-turnos');
			
			if(tabela.length >= 0 && tabela[0]){
			
				//Start - Carrossel de Tabelas
				console.log('6.2. tabela.json - Tabela da Fase de Turnos');
				
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase0">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">'+ tabela[0].sNome_Fase +'</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
			
				//Start - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				for(i = 0; i < tabela[0].Grupo[0].Tabela.length; i++){
					
					console.log('6.2.1. tabela.json - Looping no Array Tabela: '+ i);
					
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 1){pos01 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 2){pos02 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 3){pos03 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 4){pos04 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 5){pos05 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 6){pos06 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 7){pos07 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 8){pos08 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 9){pos09 = tabela[0].Grupo[0].Tabela[i];}
					if(tabela[0].Grupo[0].Tabela[i].iPosicao == 10){pos10 = tabela[0].Grupo[0].Tabela[i];}
					
					console.log('6.2.1.'+i+'. - tabela.json tabela[0].Grupo[0].Tabela[i].iPosicao - Definiu as posições:');
					console.log(tabela[0].Grupo[0].Tabela[i].iPosicao);
					
				}
				//End - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				
				$('.fase0').append(''+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos01.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos01.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos01.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos01.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos01.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos01.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos01.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos01.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos01.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos01.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos01.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos01.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos01.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos02.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos02.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos02.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos02.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos02.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos02.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos02.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos02.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos02.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos02.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos02.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos02.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos02.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos03.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos03.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos03.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos03.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos03.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos03.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos03.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos03.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos03.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos03.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos03.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos03.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos03.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos04.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos04.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos04.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos04.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos04.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos04.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos04.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos04.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos04.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos04.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos04.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos04.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos04.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos05.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos05.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos05.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos05.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos05.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos05.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos05.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos05.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos05.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos05.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos05.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos05.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos05.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos06.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos06.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos06.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos06.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos06.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos06.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos06.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos06.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos06.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos06.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos06.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos06.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos06.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos07.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos07.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos07.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos07.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos07.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos07.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos07.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos07.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos07.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos07.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos07.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos07.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos07.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos08.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos08.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos08.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos08.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos08.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos08.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos08.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos08.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos08.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos08.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos08.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos08.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos08.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos09.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos09.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos09.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos09.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos09.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos09.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos09.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos09.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos09.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos09.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos09.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos09.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos09.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao">'+pos10.iPosicao+'º</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ pos10.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+pos10.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+pos10.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+pos10.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+pos10.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+pos10.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+pos10.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+pos10.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+pos10.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+pos10.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+pos10.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+pos10.iCartao_Verm+'</div>'+
				'</div>'+
				'');
				
				tabela_json = 0;
				//End - Carrossel de Tabelas
				
			}else{
				
				//Start - Carrossel de Tabelas
				console.log('6.2. tabela.json - Tabela de Turnos não iniciada.');
				//End - Carrossel de Tabelas
			
			}
			
			if(tabela.length > 0 && tabela[1]){
				
				//Start - Carrossel de Tabelas
				console.log('6.3. tabela.json - Tabela das Quartas de Final');
				
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase1">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">'+ tabela[1].sNome_Fase +'</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
			
				//Start - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				quartas_pos01 = tabela[1].Grupo[0].Tabela[0];
				quartas_pos02 = tabela[1].Grupo[0].Tabela[1];
				quartas_pos03 = tabela[1].Grupo[1].Tabela[0];
				quartas_pos04 = tabela[1].Grupo[1].Tabela[1];
				quartas_pos05 = tabela[1].Grupo[2].Tabela[0];
				quartas_pos06 = tabela[1].Grupo[2].Tabela[1];
				quartas_pos07 = tabela[1].Grupo[3].Tabela[0];
				quartas_pos08 = tabela[1].Grupo[3].Tabela[1];
				//End - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				
				$('.fase1').append(''+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO A</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos01.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos01.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos01.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos01.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos01.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos01.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos01.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos01.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos01.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos01.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos01.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos01.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos02.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos02.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos02.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos02.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos02.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos02.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos02.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos02.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos02.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos02.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos02.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos02.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO B</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos03.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos03.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos03.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos03.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos03.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos03.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos03.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos03.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos03.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos03.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos03.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos03.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos04.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos04.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos04.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos04.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos04.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos04.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos04.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos04.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos04.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos04.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos04.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos04.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO C</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos05.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos05.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos05.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos05.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos05.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos05.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos05.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos05.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos05.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos05.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos05.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos05.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos06.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos06.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos06.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos06.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos06.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos06.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos06.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos06.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos06.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos06.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos06.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos06.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO D</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos07.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos07.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos07.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos07.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos07.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos07.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos07.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos07.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos07.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos07.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos07.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos07.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ quartas_pos08.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+quartas_pos08.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+quartas_pos08.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+quartas_pos08.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+quartas_pos08.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+quartas_pos08.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+quartas_pos08.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+quartas_pos08.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+quartas_pos08.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+quartas_pos08.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+quartas_pos08.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+quartas_pos08.iCartao_Verm+'</div>'+
				'</div>'+
				'');
				
				tabela_json = 1;
				//End - Carrossel de Tabelas
				
			}else{
				
				//Start - Carrossel de Tabelas
				console.log('6.3. tabela.json - Tabela das Quartas de Final não iniciada.');
				//End - Carrossel de Tabelas
			
			}
			
			if(tabela.length > 1 && tabela[2]){
				
				//Start - Carrossel de Tabelas
				console.log('6.4. tabela.json - Tabela do Descenso');
				
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase2">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">'+ tabela[2].sNome_Fase +'</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
			
				//Start - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				descenso_pos01 = tabela[2].Grupo[0].Tabela[0];
				descenso_pos02 = tabela[2].Grupo[0].Tabela[1];
				//End - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				
				$('.fase2').append(''+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ descenso_pos01.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+descenso_pos01.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+descenso_pos01.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+descenso_pos01.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+descenso_pos01.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+descenso_pos01.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+descenso_pos01.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+descenso_pos01.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+descenso_pos01.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+descenso_pos01.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+descenso_pos01.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+descenso_pos01.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ descenso_pos02.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+descenso_pos02.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+descenso_pos02.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+descenso_pos02.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+descenso_pos02.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+descenso_pos02.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+descenso_pos02.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+descenso_pos02.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+descenso_pos02.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+descenso_pos02.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+descenso_pos02.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+descenso_pos02.iCartao_Verm+'</div>'+
				'</div>'+
				'');
				
				tabela_json = 2;
				//End - Carrossel de Tabelas
			
			}else{
				
				//Start - Carrossel de Tabelas
				console.log('6.4. tabela.json - Tabela do Descenso não iniciada.');
				/*
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase2">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">CONFRONTO ELIMINATÓRIO - DESCENSO</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
				
				$('.fase2').append(''+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'');
				*/
				//End - Carrossel de Tabelas
			
			}
			
			if(tabela.length > 2 && tabela[3]){
				
				//Start - Carrossel de Tabelas
				console.log('6.5. tabela.json - Tabela da Semi Final');
				
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase3">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">'+ tabela[3].sNome_Fase +'</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
			
				//Start - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				semi_pos01 = tabela[3].Grupo[0].Tabela[0];
				semi_pos02 = tabela[3].Grupo[0].Tabela[1];
				semi_pos03 = tabela[3].Grupo[1].Tabela[0];
				semi_pos04 = tabela[3].Grupo[1].Tabela[1];
				//End - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				
				$('.fase3').append(''+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO A</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ semi_pos01.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+semi_pos01.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+semi_pos01.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+semi_pos01.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+semi_pos01.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+semi_pos01.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+semi_pos01.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+semi_pos01.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+semi_pos01.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+semi_pos01.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+semi_pos01.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+semi_pos01.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ semi_pos02.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+semi_pos02.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+semi_pos02.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+semi_pos02.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+semi_pos02.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+semi_pos02.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+semi_pos02.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+semi_pos02.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+semi_pos02.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+semi_pos02.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+semi_pos02.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+semi_pos02.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO B</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ semi_pos03.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+semi_pos03.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+semi_pos03.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+semi_pos03.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+semi_pos03.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+semi_pos03.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+semi_pos03.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+semi_pos03.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+semi_pos03.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+semi_pos03.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+semi_pos03.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+semi_pos03.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ semi_pos04.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+semi_pos04.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+semi_pos04.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+semi_pos04.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+semi_pos04.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+semi_pos04.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+semi_pos04.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+semi_pos04.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+semi_pos04.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+semi_pos04.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+semi_pos04.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+semi_pos04.iCartao_Verm+'</div>'+
				'</div>'+
				'');
				
				tabela_json = 3;
				//End - Carrossel de Tabelas
			
			}else{
				
				//Start - Carrossel de Tabelas
				console.log('6.5. tabela.json - Tabela da Semi Final não iniciada.');
				/*
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase3">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">SEMI FINAIS</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
				
				$('.fase3').append(''+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO A</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha"><div class="principal-jogos-barra-txt">GRUPO B</div></div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'');
				*/
				//End - Carrossel de Tabelas
			
			}
			
			if(tabela.length > 3 && tabela[4]){
				
				//Start - Carrossel de Tabelas
				console.log('6.6. tabela.json - Tabela da Final');
				
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase4">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">'+ tabela[4].sNome_Fase +'</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
			
				//Start - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				final_pos01 = tabela[4].Grupo[0].Tabela[0];
				final_pos02 = tabela[4].Grupo[1].Tabela[0];
				//End - Ordena as posições de acordo com a TAG iPosicao FASE DE TURNOS
				
				$('.fase4').append(''+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ final_pos01.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+final_pos01.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+final_pos01.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+final_pos01.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+final_pos01.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+final_pos01.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+final_pos01.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+final_pos01.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+final_pos01.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+final_pos01.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+final_pos01.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+final_pos01.iCartao_Verm+'</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-posicao"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo" style="background-image:url('+ final_pos02.sLogo +')"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome">'+final_pos02.sNome_Clube+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">'+final_pos02.iPontos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">'+final_pos02.iJogos+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">'+final_pos02.iVitorias+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">'+final_pos02.iEmpates+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">'+final_pos02.iDerrotas+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">'+final_pos02.iGols_Pro+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">'+final_pos02.iGols_Contra+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">'+final_pos02.iSaldo_Gols+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">'+final_pos02.iCartao_Amar+'</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">'+final_pos02.iCartao_Verm+'</div>'+
				'</div>'+
				'');
				
				tabela_json = 4;
				//End - Carrossel de Tabelas
			
			}else{
				
				//Start - Carrossel de Tabelas
				console.log('6.6. tabela.json - Tabela da Final não iniciada.');
				/*
				$('.principal-tabela-carrossel').append(''+
				'<div class="principal-tabela-classificacao fase4">'+
				'		<div class="principal-jogos-barra">'+
				'		<div class="principal-jogos-barra-txt">FINAIS</div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha">'+
				'		<div class="principal-tabela-classificacao-linha-header-posicao">Posição</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-pontos">PTS</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-jogos">J</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-vitorias">V</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-empates">E</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-derrotas">D</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-pro">GP</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-gols-contra">GC</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-saldo-de-gols">SG</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-amarelos">CA</div>'+
				'		<div class="principal-tabela-classificacao-linha-header-cartoes-vermelhos">CV</div>'+
				'	</div>'+
				'</div>'+
				'');
				
				$('.fase4').append(''+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'<div class="principal-tabela-classificacao-linha">'+
				'	<div class="principal-tabela-classificacao-linha-info-btn">'+
				'		<div class="principal-tabela-classificacao-linha-info-btn-off principal-tabela-classificacao-linha-info-btn-on"></div>'+
				'	</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-escudo jogo-a-decidir-escudo" style="margin-top:0.4vw;"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-nome"></div>'+
				'	<div class="principal-tabela-classificacao-linha-info-pontos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-jogos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-vitorias">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-empates">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-derrotas">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-pro">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-gols-contra">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-saldo-de-gols">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-amarelos">0</div>'+
				'	<div class="principal-tabela-classificacao-linha-info-cartoes-vermelhos">0</div>'+
				'</div>'+
				'');
				*/
				//End - Carrossel de Tabelas
			
			}
			
			contador = Number(contador + 1);
			
			console.log('6.7. tabela.json - contador - A contagem foi modificada para o próximo passo => NUMBER:');
			console.log(contador);
			
		}
		
	});
	//End - 6. TABELA
	
	//Start - 7. RODADAS
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'rodadas.json',
		success: function(retorno){
			
			//console.log(retorno);
			rodadas = retorno;
			
			console.log('7. rodadas.json - rodadas - Identifica os dados das Rodadas => JSON:');
			console.log(rodadas);
			
			console.log('7.0.1. rodadas.json - URL de retorno das Rodadas:');
			console.log('http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Jogos/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato);
			
			//Start - Faz o Carrossel das Rodadas abrir na rodada atual
			hoje = new Date();

			if(//1ª RODADA
				rodadas[0].Jogos[0].sSumula == 'NAO' ||
				rodadas[0].Jogos[1].sSumula == 'NAO' ||
				rodadas[0].Jogos[2].sSumula == 'NAO' ||
				rodadas[0].Jogos[3].sSumula == 'NAO' ||
				rodadas[0].Jogos[4].sSumula == 'NAO'
				
			){
				
				if(
					rodadas[1].Jogos[0].sSumula == 'NAO' &&
					rodadas[1].Jogos[1].sSumula == 'NAO' &&
					rodadas[1].Jogos[2].sSumula == 'NAO' &&
					rodadas[1].Jogos[3].sSumula == 'NAO' &&
					rodadas[1].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 1ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 0);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 1ª rodada');
					});
					
				}
			
			}
			if(//2ª RODADA
				rodadas[0].Jogos[0].sSumula == 'SIM' &&
				rodadas[0].Jogos[1].sSumula == 'SIM' &&
				rodadas[0].Jogos[2].sSumula == 'SIM' &&
				rodadas[0].Jogos[3].sSumula == 'SIM' &&
				rodadas[0].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[1].Jogos[0].sSumula == 'NAO' ||
					rodadas[1].Jogos[1].sSumula == 'NAO' ||
					rodadas[1].Jogos[2].sSumula == 'NAO' ||
					rodadas[1].Jogos[3].sSumula == 'NAO' ||
					rodadas[1].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 2ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:1
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 1);
						$(".principal-tabela-carrosel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 2ª rodada');
					});
					
				}
			
			}
			if(//3ª RODADA
				rodadas[1].Jogos[0].sSumula == 'SIM' &&
				rodadas[1].Jogos[1].sSumula == 'SIM' &&
				rodadas[1].Jogos[2].sSumula == 'SIM' &&
				rodadas[1].Jogos[3].sSumula == 'SIM' &&
				rodadas[1].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[2].Jogos[0].sSumula == 'NAO' ||
					rodadas[2].Jogos[1].sSumula == 'NAO' ||
					rodadas[2].Jogos[2].sSumula == 'NAO' ||
					rodadas[2].Jogos[3].sSumula == 'NAO' ||
					rodadas[2].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 3ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:2
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 2);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 3ª rodada');
					});
					
				}
			
			}
			if(//4ª RODADA
				rodadas[2].Jogos[0].sSumula == 'SIM' &&
				rodadas[2].Jogos[1].sSumula == 'SIM' &&
				rodadas[2].Jogos[2].sSumula == 'SIM' &&
				rodadas[2].Jogos[3].sSumula == 'SIM' &&
				rodadas[2].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[3].Jogos[0].sSumula == 'NAO' ||
					rodadas[3].Jogos[1].sSumula == 'NAO' ||
					rodadas[3].Jogos[2].sSumula == 'NAO' ||
					rodadas[3].Jogos[3].sSumula == 'NAO' ||
					rodadas[3].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 4ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:3
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 3);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 4ª rodada');
					});
					
				}
			
			}
			if(//5ª RODADA
				rodadas[3].Jogos[0].sSumula == 'SIM' &&
				rodadas[3].Jogos[1].sSumula == 'SIM' &&
				rodadas[3].Jogos[2].sSumula == 'SIM' &&
				rodadas[3].Jogos[3].sSumula == 'SIM' &&
				rodadas[3].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[4].Jogos[0].sSumula == 'NAO' ||
					rodadas[4].Jogos[1].sSumula == 'NAO' ||
					rodadas[4].Jogos[2].sSumula == 'NAO' ||
					rodadas[4].Jogos[3].sSumula == 'NAO' ||
					rodadas[4].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 5ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:4
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 4);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 5ª rodada');
					});
					
				}
			
			}
			if(//6ª RODADA
				rodadas[4].Jogos[0].sSumula == 'SIM' &&
				rodadas[4].Jogos[1].sSumula == 'SIM' &&
				rodadas[4].Jogos[2].sSumula == 'SIM' &&
				rodadas[4].Jogos[3].sSumula == 'SIM' &&
				rodadas[4].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[5].Jogos[0].sSumula == 'NAO' ||
					rodadas[5].Jogos[1].sSumula == 'NAO' ||
					rodadas[5].Jogos[2].sSumula == 'NAO' ||
					rodadas[5].Jogos[3].sSumula == 'NAO' ||
					rodadas[5].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 6ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:5
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 5);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 6ª rodada');
					});
					
				}
			
			}
			if(//7ª RODADA
				rodadas[5].Jogos[0].sSumula == 'SIM' &&
				rodadas[5].Jogos[1].sSumula == 'SIM' &&
				rodadas[5].Jogos[2].sSumula == 'SIM' &&
				rodadas[5].Jogos[3].sSumula == 'SIM' &&
				rodadas[5].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[6].Jogos[0].sSumula == 'NAO' ||
					rodadas[6].Jogos[1].sSumula == 'NAO' ||
					rodadas[6].Jogos[2].sSumula == 'NAO' ||
					rodadas[6].Jogos[3].sSumula == 'NAO' ||
					rodadas[6].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 7ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:6
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 6);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 7ª rodada');
					});
					
				}
			
			}
			if(//8ª RODADA
				rodadas[6].Jogos[0].sSumula == 'SIM' &&
				rodadas[6].Jogos[1].sSumula == 'SIM' &&
				rodadas[6].Jogos[2].sSumula == 'SIM' &&
				rodadas[6].Jogos[3].sSumula == 'SIM' &&
				rodadas[6].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[7].Jogos[0].sSumula == 'NAO' ||
					rodadas[7].Jogos[1].sSumula == 'NAO' ||
					rodadas[7].Jogos[2].sSumula == 'NAO' ||
					rodadas[7].Jogos[3].sSumula == 'NAO' ||
					rodadas[7].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 8ª rodada.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:7
					});
					
					$('.principal-tabela-carrossel').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:0
					});
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 7);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 8ª rodada');
					});
					
				}
			
			}
			if(//9ª RODADA
				rodadas[7].Jogos[0].sSumula == 'SIM' &&
				rodadas[7].Jogos[1].sSumula == 'SIM' &&
				rodadas[7].Jogos[2].sSumula == 'SIM' &&
				rodadas[7].Jogos[3].sSumula == 'SIM' &&
				rodadas[7].Jogos[4].sSumula == 'SIM'
			){
				
				if(
					rodadas[8].Jogos[0].sSumula == 'NAO' ||
					rodadas[8].Jogos[1].sSumula == 'NAO' ||
					rodadas[8].Jogos[2].sSumula == 'NAO' ||
					rodadas[8].Jogos[3].sSumula == 'NAO' ||
					rodadas[8].Jogos[4].sSumula == 'NAO'
				){

					console.log('7.1. rodadas.json - Estamos na 9ª rodada.');

					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:8
					});
					
					if(tabela_json = 0){
						
						$('.principal-tabela-carrossel').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:0
						});
					
					}
					
					if(tabela_json = 1){
						
						$('.principal-tabela-carrossel').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:1
						});
					
					}
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 8);
						$(".principal-tabela-carrossel").flickity('select', 0);
						
						console.log('rodadas.json - ver jogos de hoje: select 9ª rodada');
					});
					
				}
			
			}
			if(rodadas[9]){//QUARTAS DE FINAL - IDA
				
				if(
					rodadas[8].Jogos[0].sSumula == 'SIM' &&
					rodadas[8].Jogos[1].sSumula == 'SIM' &&
					rodadas[8].Jogos[2].sSumula == 'SIM' &&
					rodadas[8].Jogos[3].sSumula == 'SIM' &&
					rodadas[8].Jogos[4].sSumula == 'SIM'
				){
					
					if(
						rodadas[9].Jogos[0].sSumula == 'NAO' ||
						rodadas[9].Jogos[1].sSumula == 'NAO' ||
						rodadas[9].Jogos[2].sSumula == 'NAO' ||
						rodadas[9].Jogos[3].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos nas Quartas de Final - IDA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:9
						});
						
						if(tabela_json == 0){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:0
							});
						
						}
						
						if(tabela_json == 1){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:1
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 9);
							$(".principal-tabela-carrossel").flickity('select', 1);
							
							console.log('rodadas.json - ver jogos de hoje: select Quartas de Final - IDA');
						});
						
					}
			
				}
				
			}else{
				
				console.log('7.1.1. rodadas.json - QUARTAS DE FINAL - IDA não existe.');
				
			}
			if(rodadas[10]){//QUARTAS DE FINAL - VOLTA
			
				if(
					rodadas[9].Jogos[0].sSumula == 'SIM' &&
					rodadas[9].Jogos[1].sSumula == 'SIM' &&
					rodadas[9].Jogos[2].sSumula == 'SIM' &&
					rodadas[9].Jogos[3].sSumula == 'SIM'
				){
					
					if(
						rodadas[10].Jogos[0].sSumula == 'NAO' ||
						rodadas[10].Jogos[1].sSumula == 'NAO' ||
						rodadas[10].Jogos[2].sSumula == 'NAO' ||
						rodadas[10].Jogos[3].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos nas Quartas de Final - VOLTA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:10
						});
						
						if(tabela_json == 0){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:0
							});
						
						}
						
						if(tabela_json == 1){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:1
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 10);
							$(".principal-tabela-carrossel").flickity('select', 1);
							
							console.log('rodadas.json - ver jogos de hoje: select Quartas de Final - VOLTA');
						});
						
					}
				
				}
				
			}else{
				
				console.log('7.1.2. rodadas.json - QUARTAS DE FINAL - VOLTA não existe.');
				
			}
			if(rodadas[11]){//DESCENSO - IDA
				
				if(
					rodadas[10].Jogos[0].sSumula == 'SIM' &&
					rodadas[10].Jogos[1].sSumula == 'SIM' &&
					rodadas[10].Jogos[2].sSumula == 'SIM' &&
					rodadas[10].Jogos[3].sSumula == 'SIM'
					
				){
					
					if(
						rodadas[11].Jogos[0].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos no Descenso - IDA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:11
						});
						
						if(tabela_json == 1){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:1
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 2){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:2
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 11);
							$(".principal-tabela-carrossel").flickity('select', 2);
							
							console.log('rodadas.json - ver jogos de hoje: select Descenso - IDA');
						});
						
					}
				
				}
				
			}else{
				
				console.log('7.1.3. rodadas.json - DESCENSO - IDA não existe.');
				
			}
			if(rodadas[12]){//DESCENSO - VOLTA
			
				if(
					rodadas[11].Jogos[0].sSumula == 'SIM'
					
				){
					
					if(
						rodadas[12].Jogos[0].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos no Descenso - VOLTA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:12
						});
						
						if(tabela_json == 1){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:1
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 2){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:2
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 12);
							$(".principal-tabela-carrossel").flickity('select', 2);
							
							console.log('rodadas.json - ver jogos de hoje: select Descenso - VOLTA');
						});
						
					}
				
				}
				
			}else{
				
				console.log('7.1.4. rodadas.json - DESCENSO - VOLTA não existe.');
				
			}
			if(rodadas[13]){//SEMI FINAIS - IDA
			
				if(
					rodadas[12].Jogos[0].sSumula == 'SIM'
				){
					
					if(
						rodadas[13].Jogos[0].sSumula == 'NAO' ||
						rodadas[13].Jogos[1].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos nas Semi Finais - IDA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:13
						});
						
						if(tabela_json == 2){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:2
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 3){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:3
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 13);
							$(".principal-tabela-carrossel").flickity('select', 3);
							
							console.log('rodadas.json - ver jogos de hoje: select Semi Finais - IDA');
						});
						
					}
				
				}
			
			}else{
				
				console.log('7.1.5. rodadas.json - SEMI FINAIS - IDA não existe.');
				
			}
			if(rodadas[14]){//SEMI FINAIS - VOLTA
				
				if(
					rodadas[13].Jogos[0].sSumula == 'SIM' &&
					rodadas[13].Jogos[1].sSumula == 'SIM'
				){
					
					if(
						rodadas[14].Jogos[0].sSumula == 'NAO' ||
						rodadas[14].Jogos[1].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos nas Semi Finais - VOLTA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:14
						});
						
						if(tabela_json == 2){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:2
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 3){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:3
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 14);
							$(".principal-tabela-carrossel").flickity('select', 3);
							
							console.log('rodadas.json - ver jogos de hoje: select Semi Finais - VOLTA');
						});
						
					}	
					
				}
			
			}else{
				
				console.log('7.1.6. rodadas.json - SEMI FINAIS - VOLTA não existe.');
				
			}
			if(rodadas[15]){//FINAIS - IDA
				
				if(
					rodadas[14].Jogos[0].sSumula == 'SIM' &&
					rodadas[14].Jogos[1].sSumula == 'SIM'
					
				){
					
					if(
						rodadas[15].Jogos[0].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos na Final - IDA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:15
						});
						
						if(tabela_json == 3){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:3
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 4){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:4
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 15);
							$(".principal-tabela-carrossel").flickity('select', 4);
							
							console.log('rodadas.json - ver jogos de hoje: select Final - IDA');
						});
						
					}
				
				}
			
			}else{
				
				console.log('7.1.7. rodadas.json - FINAIS - IDA não existe.');
				
			}
			if(rodadas[16]){//FINAIS - VOLTA
			
				if(
					rodadas[15].Jogos[0].sSumula == 'SIM'
					
				){
					
					if(
						rodadas[16].Jogos[0].sSumula == 'NAO'
					){

						console.log('7.1. rodadas.json - Estamos na Final - VOLTA.');
						$('.principal-jogos-container').flickity({
							cellAlign: 'left',
							contain: true,
							pageDots: false,
							initialIndex:16
						});
						
						if(tabela_json == 3){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:3
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 4){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:4
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						$(".principal-jogos-subtitulo").click(function(){
							$(".principal-jogos-container").flickity('select', 16);
							$(".principal-tabela-carrossel").flickity('select', 4);
							
							console.log('rodadas.json - ver jogos de hoje: select Final - VOLTA');
						});
						
					}
				
				}
			
			}else{
				
				console.log('7.1.8. rodadas.json - FINAIS - VOLTA não existe.');
				
			}
			if(rodadas[16]){//PÓS CAMPEONATO
			
				if(
					rodadas[16].Jogos[0].sSumula == 'SIM'
				){

					console.log('7.1. rodadas.json - Este Campeonato está encerrado.');
					$('.principal-jogos-container').flickity({
						cellAlign: 'left',
						contain: true,
						pageDots: false,
						initialIndex:16
					});
					
					if(tabela_json == 3){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:3
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
						
						if(tabela_json == 4){
							
							$('.principal-tabela-carrossel').flickity({
								cellAlign: 'left',
								contain: true,
								pageDots: false,
								initialIndex:4
							});
							
							$('.principal-tabela-carrossel').removeClass('principal-tabela-carrossel-turnos');
						
						}
					
					$(".principal-jogos-subtitulo").click(function(){
						$(".principal-jogos-container").flickity('select', 16);
						$(".principal-tabela-carrossel").flickity('select', 4);
						
						console.log('rodadas.json - ver jogos de hoje: select Este Campeonato está encerrado');
					});
					
				}
			
			}
			//End - Faz o Carrossel das Rodadas abrir na rodada atual

			//Start - Inserir jogos nas rodadas - FASE DE TURNOS
			for(i = 0; i <= 8; i++){
				
				contador_rodada = Number(i + 1);
				
				for(j = 0; j < rodadas[i].Jogos.length; j++){
				
					contador_jogo = Number(j + 1);

					$('.rodada'+ contador_rodada +' > .principal-jogos-barra > .principal-jogos-barra-txt').html(contador_rodada +'ª RODADA');
					$('.rodada'+ contador_rodada +' > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('TURNOS');
					
					if(rodadas[i].Jogos[j].sNmMandante != ''){
						
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-data').html(rodadas[i].Jogos[j].sDiaSemana +', '+ rodadas[i].Jogos[j].sData + ' ' + rodadas[i].Jogos[j].sHora +' - Jogo: '+ rodadas[i].Jogos[j].sJogo);
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[i].Jogos[j].sNmMandante);
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[i].Jogos[j].sLogoMandante +')');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[i].Jogos[j].iGolsMandante +' x '+ rodadas[i].Jogos[j].iGolsVisitante);
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[i].Jogos[j].sLogoVisitante +')');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[i].Jogos[j].sNmVisitante);
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[i].Jogos[j].sEstadio +' - '+ rodadas[i].Jogos[j].sCidade);
						if(
							rodadas[i].Jogos[j].sLogoTransmissao != '' &&
							rodadas[i].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[i].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[i].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[i].Jogos[j].sLogoTransmissao != '' &&
							rodadas[i].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[i].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sSumula == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sArbritagem == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sDelegado == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sIMT == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[i].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[i].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[i].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
						
						//console.log("rodadas["+i+"].Jogos["+j+"].sDiaSemana: "+ rodadas[i].Jogos[j].sDiaSemana);
					
					}else{
						
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[i].Jogos[j].sJogo);
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodada'+ contador_rodada +' .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
				
				}
				
				console.log('7.2.'+i+'. rodadas.json - Inseriu a rodada '+ contador_rodada +' da fase de TURNOS.');
				
			}
			//End - Inserir jogos nas rodadas - FASE DE TURNOS

			//Start - Inserir jogos nas rodadas - QUARTAS DE FINAL
			if(rodadas[9]){//QUARTAS DE FINAL - IDA
			
				for(j = 0; j < rodadas[9].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
					$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					
					if(rodadas[9].Jogos[j].sNmMandante != ""){
					
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[9].Jogos[j].sDiaSemana +', '+ rodadas[9].Jogos[j].sData + ' ' + rodadas[9].Jogos[j].sHora +' - Jogo: '+ rodadas[9].Jogos[j].sJogo);
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[9].Jogos[j].sNmMandante);
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[9].Jogos[j].sLogoMandante +')');
						if(rodadas[9].Jogos[j].iGolsMandantePen != 0){$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[9].Jogos[j].iGolsMandantePen);}
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[9].Jogos[j].iGolsMandante +' x '+ rodadas[9].Jogos[j].iGolsVisitante);
						if(rodadas[9].Jogos[j].iGolsVisitantePen != 0){$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[9].Jogos[j].iGolsVisitantePen);}
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[9].Jogos[j].sLogoVisitante +')');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[9].Jogos[j].sNmVisitante);
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[9].Jogos[j].sEstadio +' - '+ rodadas[9].Jogos[j].sCidade);
						if(
							rodadas[9].Jogos[j].sLogoTransmissao != '' &&
							rodadas[9].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[9].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[9].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[9].Jogos[j].sLogoTransmissao != '' &&
							rodadas[9].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[9].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sSumula == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sIMT == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[9].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[9].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[9].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[9].Jogos[j].sJogo);
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.3. rodadas.json - Inseriu a rodada QUARTAS DE FINAL - IDA.');
					
				}
			
			}else{

				for(j = 0; j < 5; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
					$('.rodadaQUARTAS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaQUARTAS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			if(rodadas[10]){//QUARTAS DE FINAL - VOLTA
				
				for(j = 0; j < rodadas[10].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
					$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					
					if(rodadas[10].Jogos[j].sNmMandante != ""){
					
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[10].Jogos[j].sDiaSemana +', '+ rodadas[10].Jogos[j].sData + ' ' + rodadas[10].Jogos[j].sHora +' - Jogo: '+ rodadas[10].Jogos[j].sJogo);
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[10].Jogos[j].sNmMandante);
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[10].Jogos[j].sLogoMandante +')');
						if(rodadas[10].Jogos[j].iGolsMandantePen != 0){$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[10].Jogos[j].iGolsMandantePen);}
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[10].Jogos[j].iGolsMandante +' x '+ rodadas[10].Jogos[j].iGolsVisitante);
						if(rodadas[10].Jogos[j].iGolsVisitantePen != 0){$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[10].Jogos[j].iGolsVisitantePen);}
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[10].Jogos[j].sLogoVisitante +')');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[10].Jogos[j].sNmVisitante);
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[10].Jogos[j].sEstadio +' - '+ rodadas[10].Jogos[j].sCidade);
						if(rodadas[10].Jogos[j].sSumula == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[10].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[10].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[10].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[10].Jogos[j].sIMT == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[10].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[10].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[10].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
						if(
							rodadas[10].Jogos[j].sLogoTransmissao != '' &&
							rodadas[10].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[10].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[10].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[10].Jogos[j].sLogoTransmissao != '' &&
							rodadas[10].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[10].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						
					}else{
						
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[10].Jogos[j].sJogo);
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.4. rodadas.json - Inseriu a rodada QUARTAS DE FINAL - VOLTA.');
					
				}
			
			}else{

				for(j = 0; j < 5; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('QUARTAS DE FINAL');
					$('.rodadaQUARTAS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaQUARTAS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			//End - Inserir jogos nas rodadas - QUARTAS DE FINAL

			//Start - Inserir jogos nas rodadas - DESCENSO
			if(rodadas[11]){//DESCENSO - IDA
				
				for(j = 0; j < rodadas[11].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
					$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					
					if(rodadas[11].Jogos[j].sNmMandante != ""){
					
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[11].Jogos[j].sDiaSemana +', '+ rodadas[11].Jogos[j].sData + ' ' + rodadas[11].Jogos[j].sHora +' - Jogo: '+ rodadas[11].Jogos[j].sJogo);
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[11].Jogos[j].sNmMandante);
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[11].Jogos[j].sLogoMandante +')');
						if(rodadas[11].Jogos[j].iGolsMandantePen != 0){$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[11].Jogos[j].iGolsMandantePen);}
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[11].Jogos[j].iGolsMandante +' x '+ rodadas[11].Jogos[j].iGolsVisitante);
						if(rodadas[11].Jogos[j].iGolsVisitantePen != 0){$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[11].Jogos[j].iGolsVisitantePen);}
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[11].Jogos[j].sLogoVisitante +')');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[11].Jogos[j].sNmVisitante);
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[11].Jogos[j].sEstadio +' - '+ rodadas[11].Jogos[j].sCidade);
						if(
							rodadas[11].Jogos[j].sLogoTransmissao != '' &&
							rodadas[11].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[11].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[11].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[11].Jogos[j].sLogoTransmissao != '' &&
							rodadas[11].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[11].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sSumula == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sIMT == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[11].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[11].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[11].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
						
					}else{
						
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[11].Jogos[j].sJogo);
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.5. rodadas.json - Inseriu a rodada DESCENSO - IDA.');
					
				}
			
			}else{

				for(j = 0; j < 2; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
					$('.rodadaDESCENSO_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaDESCENSO_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			if(rodadas[12]){//DESCENSO - VOLTA
			
				for(j = 0; j < rodadas[12].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
					$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					
					if(rodadas[12].Jogos[j].sNmMandante != ""){
					
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[12].Jogos[j].sDiaSemana +', '+ rodadas[12].Jogos[j].sData + ' ' + rodadas[12].Jogos[j].sHora +' - Jogo: '+ rodadas[12].Jogos[j].sJogo);
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[12].Jogos[j].sNmMandante);
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[12].Jogos[j].sLogoMandante +')');
						if(rodadas[12].Jogos[j].iGolsMandantePen != 0){$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[12].Jogos[j].iGolsMandantePen);}
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[12].Jogos[j].iGolsMandante +' x '+ rodadas[12].Jogos[j].iGolsVisitante);
						if(rodadas[12].Jogos[j].iGolsVisitantePen != 0){$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[12].Jogos[j].iGolsVisitantePen);}
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[12].Jogos[j].sLogoVisitante +')');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[12].Jogos[j].sNmVisitante);
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[12].Jogos[j].sEstadio +' - '+ rodadas[12].Jogos[j].sCidade);
						if(
							rodadas[12].Jogos[j].sLogoTransmissao != '' &&
							rodadas[12].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[12].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[12].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[12].Jogos[j].sLogoTransmissao != '' &&
							rodadas[12].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[12].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sSumula == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sIMT == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[12].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[12].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[12].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[12].Jogos[j].sJogo);
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.6. rodadas.json - Inseriu a rodada DESCENSO - VOLTA.');

				}
			
			}else{

				for(j = 0; j < 2; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('DESCENSO');
					$('.rodadaDESCENSO_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaDESCENSO_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			//End - Inserir jogos nas rodadas - DESCENSO

			//Start - Inserir jogos nas rodadas - SEMI FINAIS
			if(rodadas[13]){//SEMI FINAIS - IDA
				
				for(j = 0; j < rodadas[13].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
					$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					
					if(rodadas[13].Jogos[j].sNmMandante != ""){
					
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[13].Jogos[j].sDiaSemana +', '+ rodadas[13].Jogos[j].sData + ' ' + rodadas[13].Jogos[j].sHora +' - Jogo: '+ rodadas[13].Jogos[j].sJogo);
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[13].Jogos[j].sNmMandante);
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[13].Jogos[j].sLogoMandante +')');
						if(rodadas[13].Jogos[j].iGolsMandantePen != 0){$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[13].Jogos[j].iGolsMandantePen);}
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[13].Jogos[j].iGolsMandante +' x '+ rodadas[13].Jogos[j].iGolsVisitante);
						if(rodadas[13].Jogos[j].iGolsVisitantePen != 0){$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[13].Jogos[j].iGolsVisitantePen);}
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[13].Jogos[j].sLogoVisitante +')');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[13].Jogos[j].sNmVisitante);
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[13].Jogos[j].sEstadio +' - '+ rodadas[13].Jogos[j].sCidade);
						if(
							rodadas[13].Jogos[j].sLogoTransmissao != '' &&
							rodadas[13].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[13].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[13].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[13].Jogos[j].sLogoTransmissao != '' &&
							rodadas[13].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[13].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sSumula == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sIMT == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[13].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[13].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[13].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[13].Jogos[j].sJogo);
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.7. rodadas.json - Inseriu a rodada SEMI FINAIS - IDA.');
					
				}
			
			}else{

				for(j = 0; j < 3; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
					$('.rodadaSEMI_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaSEMI_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			if(rodadas[14]){//SEMI FINAIS - VOLTA
				
				for(j = 0; j < rodadas[14].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
					$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					
					if(rodadas[14].Jogos[j].sNmMandante != ""){
					
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[14].Jogos[j].sDiaSemana +', '+ rodadas[14].Jogos[j].sData + ' ' + rodadas[14].Jogos[j].sHora +' - Jogo: '+ rodadas[14].Jogos[j].sJogo);
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[14].Jogos[j].sNmMandante);
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[14].Jogos[j].sLogoMandante +')');
						if(rodadas[14].Jogos[j].iGolsMandantePen != 0){$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[14].Jogos[j].iGolsMandantePen);}
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[14].Jogos[j].iGolsMandante +' x '+ rodadas[14].Jogos[j].iGolsVisitante);
						if(rodadas[14].Jogos[j].iGolsVisitantePen != 0){$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[14].Jogos[j].iGolsVisitantePen);}
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[14].Jogos[j].sLogoVisitante +')');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[14].Jogos[j].sNmVisitante);
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[14].Jogos[j].sEstadio +' - '+ rodadas[14].Jogos[j].sCidade);
						if(
							rodadas[14].Jogos[j].sLogoTransmissao != '' &&
							rodadas[14].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[14].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[14].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[14].Jogos[j].sLogoTransmissao != '' &&
							rodadas[14].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[14].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sSumula == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sIMT == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[14].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[14].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[14].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[14].Jogos[j].sJogo);
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.8. rodadas.json - Inseriu a rodada SEMI FINAIS - VOLTA.');
					
				}
			
			}else{

				for(j = 0; j < 3; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('SEMI FINAIS');
					$('.rodadaSEMI_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaSEMI_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			//End - Inserir jogos nas rodadas - SEMI FINAIS

			//Start - Inserir jogos nas rodadas - FINAIS
			if(rodadas[15]){//FINAIS - IDA
				
				for(j = 0; j < rodadas[15].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
					$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					
					if(rodadas[15].Jogos[j].sNmMandante != ""){
					
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[15].Jogos[j].sDiaSemana +', '+ rodadas[15].Jogos[j].sData + ' ' + rodadas[15].Jogos[j].sHora +' - Jogo: '+ rodadas[15].Jogos[j].sJogo);
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[15].Jogos[j].sNmMandante);
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[15].Jogos[j].sLogoMandante +')');
						if(rodadas[15].Jogos[j].iGolsMandantePen != 0){$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[15].Jogos[j].iGolsMandantePen);}
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[15].Jogos[j].iGolsMandante +' x '+ rodadas[15].Jogos[j].iGolsVisitante);
						if(rodadas[15].Jogos[j].iGolsVisitantePen != 0){$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[15].Jogos[j].iGolsVisitantePen);}
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[15].Jogos[j].sLogoVisitante +')');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[15].Jogos[j].sNmVisitante);
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[15].Jogos[j].sEstadio +' - '+ rodadas[15].Jogos[j].sCidade);
						if(
							rodadas[15].Jogos[j].sLogoTransmissao != '' &&
							rodadas[15].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[15].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[15].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[15].Jogos[j].sLogoTransmissao != '' &&
							rodadas[15].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[15].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sSumula == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sIMT == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[15].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[15].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[15].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[15].Jogos[j].sJogo);
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.9. rodadas.json - Inseriu a rodada FINAIS - IDA.');
					
				}
			
			}else{

				for(j = 0; j < 2; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
					$('.rodadaFINAIS_IDA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('IDA');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaFINAIS_IDA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			if(rodadas[16]){//FINAIS - VOLTA
				
				for(j = 0; j < rodadas[16].Jogos.length; j++){
					
					contador_jogo = Number(j + 1);
					
					$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
					$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					
					if(rodadas[16].Jogos[j].sNmMandante != ""){
					
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html(rodadas[16].Jogos[j].sDiaSemana +', '+ rodadas[16].Jogos[j].sData + ' ' + rodadas[16].Jogos[j].sHora +' - Jogo: '+ rodadas[16].Jogos[j].sJogo);
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html(rodadas[16].Jogos[j].sNmMandante);
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').css('background-image', 'url('+ rodadas[16].Jogos[j].sLogoMandante +')');
						if(rodadas[16].Jogos[j].iGolsMandantePen != 0){$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-mandante').html(rodadas[16].Jogos[j].iGolsMandantePen);}
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html(rodadas[16].Jogos[j].iGolsMandante +' x '+ rodadas[16].Jogos[j].iGolsVisitante);
						if(rodadas[16].Jogos[j].iGolsVisitantePen != 0){$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-penalti-visitante').html(rodadas[16].Jogos[j].iGolsVisitantePen);}
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').css('background-image', 'url('+ rodadas[16].Jogos[j].sLogoVisitante +')');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html(rodadas[16].Jogos[j].sNmVisitante);
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html(rodadas[16].Jogos[j].sEstadio +' - '+ rodadas[16].Jogos[j].sCidade);
						if(
							rodadas[16].Jogos[j].sLogoTransmissao != '' &&
							rodadas[16].Jogos[j].sLogoTransmissao2 != ''
						){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[16].Jogos[j].sLogoTransmissao+')"></div>'+
							'	<div class="principal-jogos-resultado-transmissao-50" style="background-image:url('+rodadas[16].Jogos[j].sLogoTransmissao2+')"></div>'+
							'');
						}
						if(
							rodadas[16].Jogos[j].sLogoTransmissao != '' &&
							rodadas[16].Jogos[j].sLogoTransmissao2 == ''
						){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-transmissao').append(''+
							'	<div class="principal-jogos-resultado-transmissao-100" style="background-image:url('+rodadas[16].Jogos[j].sLogoTransmissao+')"></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sSumula == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="sumula.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">Súmula</a></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sArbritagem == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="arbitragem.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">Arbitragem</a></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sDelegado == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="delegado.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">Delegado</a></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sBoletimFinan == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="boletim.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">Bol. Financeiro</a></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sIMT == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-btn-sumula').append(''+
							'<div class="principal-jogos-btn"><a href="imt.html?sumula=1&iAno='+rodadas[16].Jogos[j].sData.substr(6, 4)+'&iCampeonato='+ iCampeonato +'&iJogo='+ rodadas[16].Jogos[j].sJogo +'" target="_blank">IMT</a></div>'+
							'');
						}
						if(rodadas[16].Jogos[j].sPortoesFechado == 'SIM'){
							$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-portoes-fechados').addClass('principal-jogos-portoes-fechados-on');
						}
					
					}else{
						
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: '+ rodadas[16].Jogos[j].sJogo);
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
						$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
						
					}
					
					console.log('7.10. rodadas.json - Inseriu a rodada FINAIS - VOLTA.');
					
				}
			
			}else{

				for(j = 0; j < 2; j++){

					contador_jogo = Number(j + 1);
					
					$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt').html('FINAIS');
					$('.rodadaFINAIS_VOLTA > .principal-jogos-barra > .principal-jogos-barra-txt-sub').html('VOLTA');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-data').html('Jogo: ');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-abrev').html('MANDANTE');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-casa-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .principal-jogos-resultado-gols').html('- x -');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-escudo').addClass('jogo-a-decidir-escudo');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-time-visitante-abrev').html('VISITANTE');
					$('.rodadaFINAIS_VOLTA .jogo'+ contador_jogo +' .jogo-estadio').html('Local a decidir');
					
				}
				
			}
			//End - Inserir jogos nas rodadas - FINAIS
			
			contador = Number(contador + 1);
			
			console.log('7.7. rodadas.json - contador - A contagem foi modificada para o próximo passo => NUMBER:');
			console.log(contador);
			
		}
		
	});
	//End - 7. RODADAS

	//Start - ARTILHARIA
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'artilharia.json',
		success: function(retorno){
			
			//console.log(retorno);
			artilharia = retorno;
			
			console.log('artilharia.json URL de retorno da Artilharia:');
			console.log('http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Artilharia/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato);

			//Start - Ordenar por maior número de gols, depois vai pôr ordem alfabética
			artilharia.sort(function (a, b){
				if (a.iGols > b.iGols) return -1;
				if (a.iGols < b.iGols) return 1;
				if (a.sNmJogador > b.sNmJogador) return 1;
				if (a.sNmJogador < b.sNmJogador) return -1;
			});
			//End - Ordenar por maior número de gols, depois vai pôr ordem alfabética

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
			
			contador = Number(contador + 1);
			console.log(contador);
			
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
			
			console.log('goleiro.json URL de retorno dos Goleiros:');
			console.log('http://egol.fcf.com.br/sesp/WsEgol.wso/Get_GoleiroMenosVazado/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato);
			
			//Start - Ordenar por menor número de gols, depois vai pôr ordem alfabética
			goleiro.sort(function (a, b){
				if (a.iGols > b.iGols) return 1;
				if (a.iGols < b.iGols) return -1;
				if (a.sNmJogador > b.sNmJogador) return 1;
				if (a.sNmJogador < b.sNmJogador) return -1;
			});
			//End - Ordenar por menor número de gols, depois vai pôr ordem alfabética

			//Start - Objeto Goleiro em console
			//console.log("Goleiro Menos Vazado");
			for(i = 0; i < goleiro.length; i++){
				//console.log(goleiro[i]);
			}
			//End - Objeto Goleiro em console

			//Start - Inserir goleiros
			for(i = 0; i < 5; i++){
				
				contador_goleiro = Number(i + 1);
				$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-completa-linha-body-clube').css('background-image', 'url('+ goleiro[i].sLogo +')');
				$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-completa-linha-body-gols').html(goleiro[i].iGols);
				$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-completa-linha-body-foto').css('background-image', 'url('+ goleiro[i].sFoto +')');
				$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-completa-linha-body-nome').html(goleiro[i].sNmJogador);
				$('.goleiro'+ contador_goleiro +' > .estatisticas-tabela-completa-linha-body-apelido').html(goleiro[i].sApelido);
				$('.goleiro'+ contador_goleiro +' > .goleiro-media').html(goleiro[i].nMedia.toFixed(2));
				$('.goleiro'+ contador_goleiro +' > .goleiro-part').html(goleiro[i].nParticipacao.toFixed(2) +'%');
				$('.goleiro'+ contador_goleiro +' > .goleiro-atuacoes').html(goleiro[i].iAtuacoes);
				$('.goleiro'+ contador_goleiro +' > .goleiro-jogos').html(goleiro[i].iTotalJogos);

			}
			//End - Inserir goleiros
			
			contador = Number(contador + 1);
			console.log(contador);
			
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
	
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_Documentos/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'documentos.json',
		success: function(retorno){
			
			//console.log(retorno);
			documentos = retorno;
			
			for(i = 0; i < documentos.length; i++){
				
				//console.log(documentos[i]);
				
				if(documentos[i].sNmDoc == 'REGULAMENTO GERAL'){
					$('.documentos-reg-geral-campo').append(''+
					'<div class="documentos-tela-tabela-linha">'+
					'	<div class="documentos-tela-tabela-linha-body-data">'+ documentos[i].sTpDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-titulo">'+ documentos[i].sNmDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-btn-espaco">'+
					'		<div class="documentos-tela-tabela-linha-body-btn"><a href="'+ documentos[i].sPathDoc +'" target="_blank">Visualizar</a></div>'+
					'	</div>'+
					'</div>'+
					'');
				}
				
				if(documentos[i].sNmDoc == 'REGULAMENTO ESPECIFICO'){
					$('.documentos-reg-especifico-campo').append(''+
					'<div class="documentos-tela-tabela-linha">'+
					'	<div class="documentos-tela-tabela-linha-body-data">'+ documentos[i].sTpDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-titulo">'+ documentos[i].sNmDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-btn-espaco">'+
					'		<div class="documentos-tela-tabela-linha-body-btn"><a href="'+ documentos[i].sPathDoc +'" target="_blank">Visualizar</a></div>'+
					'	</div>'+
					'</div>'+
					'');
				}
				
				if(
					documentos[i].sNmDoc != 'REGULAMENTO GERAL' &&
					documentos[i].sNmDoc != 'REGULAMENTO ESPECIFICO'
				){
					$('.documentos-complementares-campo').append(''+
					'<div class="documentos-tela-tabela-linha">'+
					'	<div class="documentos-tela-tabela-linha-body-data">'+ documentos[i].sTpDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-titulo">'+ documentos[i].sNmDoc +'</div>'+
					'	<div class="documentos-tela-tabela-linha-body-btn-espaco">'+
					'		<div class="documentos-tela-tabela-linha-body-btn"><a href="'+ documentos[i].sPathDoc +'" target="_blank">Visualizar</a></div>'+
					'	</div>'+
					'</div>'+
					'');
				}
				
			};
			
			contador = Number(contador + 1);
			console.log(contador);
			
		}
		
	});
	
	$.ajax({
		dataType: "json",
		method: "GET",
		url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_ClubesParticipantes/JSON/debug?iAno='+iAno+'&iCampeonato='+iCampeonato,
		//url: 'clubes.json',
		success: function(retorno){
			
			clubes = retorno;
			
			console.log('clubes.json clubes:');
			console.log(clubes);
			
			for(i = 0; i < clubes.length; i++){
				
				//console.log(clubes[i]);
				
				$('.documentos-ficha-campo').append(''+
				'	<div class="documentos-tela-tabela-linha-clube documentos-clubes'+ i +'" style="background-image:url('+ clubes[i].sLogo +')"></div>'+
				'');
				
				if(i == 0){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time0';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time0').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time0 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 1){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time1';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time1').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time1 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 2){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time2';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time2').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time2 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 3){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time3';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time3').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time3 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 4){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time4';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time4').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time4 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 5){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time5';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time5').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time5 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 6){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time6';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time6').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time6 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 7){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time7';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time7').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time7 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 8){
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time8';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time8').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time8 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);
							
						}
						
					});
					
				}
				
				if(i == 9){/*A TELA DE LOADING FINALIZA AQUI CASO TUDO ESTEJA PRONTO*/
					
					$.ajax({
						dataType: "json",
						method: "GET",
						url: 'http://egol.fcf.com.br/sesp/WsEgol.wso/Get_JogadoresClube/JSON/debug?sClube='+ clubes[i].sCodClube +'&iCampeonato='+iCampeonato,
						//url: 'inscricoes.json',
						success: function(retorno){
							
							inscricoes = retorno;
							
							seletor_de_times = 'time9';
							console.log(seletor_de_times);
							
							console.log('clubes.json inscricoes:');
							console.log(inscricoes);
							
							$('.time9').append(''+
							'<div class="inscricoes-time-escudo" style="background-image:url('+ inscricoes.sLogo +')"></div>'+
							'<div class="inscricoes-time-nome">'+ inscricoes.sNmClube +'</div>'+
							'<div class="inscricoes-time-numero">Inscrição do Clube: '+ inscricoes.sCodClube +'</div>'+
							'<div class="inscricoes-time-titulo">FICHA DE INSCRIÇÃO</div>'+
							'<div class="inscricoes-time-subtitulo">Atletas Disponíveis para a Competição</div>'+
							'<table class="inscricoes-time-tabela">'+
							'	<thead>'+
							'		<tr>'+
							'			<th>Nº</th>'+
							'			<th>CBF</th>'+
							'			<th>Nome do Atleta</th>'+
							'			<th>Cat.</th>'+
							'			<th>Data da Inscrição</th>'+
							'			<th>Atestado</th>'+
							'		</tr>'+
							'	</thead>'+
							'	<tbody></tbody>'+
							'</table>');
							
							for(j = 0; j < inscricoes.Jogador.length; j++){
								
								$('.time9 .inscricoes-time-tabela tbody').append(''+
								'<tr>'+
								'	<td>'+ inscricoes.Jogador[j].iSequencia +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCBF +'</td>'+
								'	<td><div class="inscricoes-time-tabela-foto" style="background-image:url('+ inscricoes.Jogador[j].sFoto +')" ></div>'+ inscricoes.Jogador[j].sNmJogador +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sCategoria +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sDtInscricao +'</td>'+
								'	<td>'+ inscricoes.Jogador[j].sAtestado +'</td>'+
								'</tr>'+
								+'');
								
							}
							
							contador = Number(contador + 1);
							console.log(contador);

							if(contador == 16){
								$('.loading').removeClass('on');
							}else{
								$('.loading').removeClass('on');
								//location.reload();
							}
							
						}
						
					});
					
				}
				
			};

			$('.documentos-clubes0').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time0').addClass('on');
			});
			$('.documentos-clubes1').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time1').addClass('on');
			});
			$('.documentos-clubes2').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time2').addClass('on');
			});
			$('.documentos-clubes3').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time3').addClass('on');
			});
			$('.documentos-clubes4').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time4').addClass('on');
			});
			$('.documentos-clubes5').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time5').addClass('on');
			});
			$('.documentos-clubes6').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time6').addClass('on');
			});
			$('.documentos-clubes7').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time7').addClass('on');
			});
			$('.documentos-clubes8').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time8').addClass('on');
			});
			$('.documentos-clubes9').click(function(){
				$('.escurecer').addClass('on');
				$('.inscricoes').addClass('on');
				$('.time9').addClass('on');
			});

		}
		
	});
	//End - DOCUMENTOS
	
	
});