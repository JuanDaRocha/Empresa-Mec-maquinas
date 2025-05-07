function toggleMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const itens = document.getElementById("Navegação");

    // Alterna o menu hamburguer para X
    menuToggle.classList.toggle("active");

    if (itens.style.transform === 'translateX(0%)') {
        itens.style.transform = 'translateX(-100%)';  // Esconde à esquerda
    } else {
        itens.style.transform = 'translateX(0%)';  // Mostra o menu
    }
}

window.onscroll = function() {changeMenuColor()};

function changeMenuColor() {
    var menu = document.getElementById("Menu-Header");

    // Verifica se o usuário rolou para baixo
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.style.backgroundColor = "#1F1F1F"; // Muda para uma cor mais escura, por exemplo
    } else {
        menu.style.backgroundColor = "transparent"; // Volta para o fundo transparente
    }
}