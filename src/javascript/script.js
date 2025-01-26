let menuList = document.getElementById("menuList");
let content = document.querySelector("main");

menuList.style.maxHeight = "0"; // Inicializa o menu fechado

function toggleMenu() {
  // Verifica o estado atual do menu
  if (menuList.style.maxHeight === "0px") {
    // Abre o menu
    menuList.style.maxHeight = "350px"; // Altura do menu quando aberto
    content.classList.add("open-menu"); // Empurra o conteúdo para baixo
  } else {
    // Fecha o menu
    menuList.style.maxHeight = "0px"; // Fecha o menu
    content.classList.remove("open-menu"); // Restaura o conteúdo para o topo
  }
}
