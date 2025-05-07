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