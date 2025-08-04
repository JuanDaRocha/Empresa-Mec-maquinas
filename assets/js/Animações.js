//Animação do menu aparecendo
function toggleMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const itens = document.getElementById("Navegação");
    const cor = document.getElementById("Menu-Header")

    // Alterna o menu hamburguer para X
    menuToggle.classList.toggle("active");

    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(-150%)';  // Esconde à esquerda
    } else {
        itens.style.transform = 'translateX(0%)';  // Mostra o menu
        cor.style.backgroundColor = '#030303'
    }
}


//Mudança de cor quando o menu desce 
window.onscroll = function() {changeMenuColor()};

function changeMenuColor() {
    let menu = document.getElementById("Menu-Header");

    // Verifica se o usuário rolou para baixo
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.style.backgroundColor = "#030303"; // Muda para uma cor mais escura, por exemplo
    } else {
        menu.style.backgroundColor = "transparent"; // Volta para o fundo transparente
    }
}

const imagensHeader = [
  "assets/imagens/TratorDopaidoAbreu.png",
  "assets/imagens/TratorDoRoblokerXD.jpg"
];

let indexHeader = 0;
const conteudoHeader = document.getElementById("Conteudo-header");

function criarCamadaImagem(src, visivel = false) {
  const div = document.createElement("div");
  div.classList.add("bg-img");
  if (visivel) div.classList.add("visible");
  div.style.backgroundImage = `url('${src}')`;
  conteudoHeader.appendChild(div);
  return div;
}

// Cria as duas camadas de imagem
const camada1 = criarCamadaImagem(imagensHeader[0], true);
const camada2 = criarCamadaImagem(imagensHeader[1]);

let camadaAtual = camada1;
let proximaCamada = camada2;

function trocarImagemHeader() {
  if (!conteudoHeader) return;

  // Se for mobile/tablet, fixa a primeira imagem
  if (window.innerWidth <= 1024) {
    camada1.style.backgroundImage = `url('${imagensHeader[0]}')`;
    camada2.style.backgroundImage = `url('${imagensHeader[0]}')`;
    camada1.classList.add("visible");
    camada2.classList.remove("visible");
    return;
  }

  // Alterna a visibilidade
  proximaCamada.style.backgroundImage = `url('${imagensHeader[indexHeader]}')`;
  proximaCamada.classList.add("visible");
  camadaAtual.classList.remove("visible");

  // Troca as referências para a próxima troca
  [camadaAtual, proximaCamada] = [proximaCamada, camadaAtual];

  indexHeader = (indexHeader + 1) % imagensHeader.length;
}

trocarImagemHeader();
setInterval(trocarImagemHeader, 3500);
  