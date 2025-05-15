//Animação do menu aparecendo
function toggleMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const itens = document.getElementById("Navegação");

    // Alterna o menu hamburguer para X
    menuToggle.classList.toggle("active");

    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(-150%)';  // Esconde à esquerda
    } else {
        itens.style.transform = 'translateX(0%)';  // Mostra o menu
    }
}


//Mudança de cor quando o menu desce 
window.onscroll = function() {changeMenuColor()};

function changeMenuColor() {
    var menu = document.getElementById("Menu-Header");

    // Verifica se o usuário rolou para baixo
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.style.backgroundColor = "#030303"; // Muda para uma cor mais escura, por exemplo
    } else {
        menu.style.backgroundColor = "transparent"; // Volta para o fundo transparente
    }
}

const imagensHeader = [
  "assets/imagens/TratorDopaidoAbreu.png",
  "assets/imagens/Banner_de_oferta.jpg"
];

let indexHeader = 0;

function trocarImagemHeader() {
  const conteudoHeader = document.getElementById("Conteudo-header");
  if (!conteudoHeader) return;

  // Pra tablet e mobile, fixa só a primeira imagem
  if (window.innerWidth <= 1024) {
    conteudoHeader.style.backgroundImage = `url('${imagensHeader[0]}')`;
    return;
  }

  conteudoHeader.style.backgroundImage = `url('${imagensHeader[indexHeader]}')`;
  indexHeader = (indexHeader + 1) % imagensHeader.length;
}

trocarImagemHeader();
setInterval(trocarImagemHeader, 5000);

  