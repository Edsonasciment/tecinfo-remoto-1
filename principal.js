var banners = 
	["os melhores do brasil!","qualidade e preço "];
var bannerAtual = 0;

function trocaBunner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = 
	banners[bannerAtual];
}

setInterval(trocaBunner,2000);