// Script helper para garantir carregamento correto do Flickity Fade
(function () {
	"use strict";

	function loadFlickityFade() {
		// Verificar se Flickity está disponível
		if (typeof window.Flickity !== "undefined") {
			// Flickity disponível, carregar fade
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "plugins/flickity/flickity-fade.js";
			script.onerror = function () {
				console.warn("Falha ao carregar flickity-fade.js");
			};
			document.head.appendChild(script);
			return true;
		}
		return false;
	}

	// Tentar carregar imediatamente
	if (document.readyState === "loading") {
		// DOM ainda está carregando
		document.addEventListener("DOMContentLoaded", function () {
			// Aguardar um pouco para Flickity estar pronto
			setTimeout(loadFlickityFade, 50);
		});
	} else {
		// DOM já carregado
		setTimeout(loadFlickityFade, 50);
	}

	// Fallback: tentar novamente após 500ms
	setTimeout(function () {
		if (typeof window.Flickity === "undefined") {
			console.warn("Flickity não encontrado, tentando carregar fade mesmo assim");
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "plugins/flickity/flickity-fade.js";
			script.onerror = function () {
				console.warn("Falha ao carregar flickity-fade.js (fallback)");
			};
			document.head.appendChild(script);
		}
	}, 500);
})();
