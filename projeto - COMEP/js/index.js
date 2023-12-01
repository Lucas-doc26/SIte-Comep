function mostrar_producao() {
    document.getElementById("cards_producao").style.display = "contents";
    document.getElementById("cards_mecanica").style.display = "none";
    document.getElementById("cards_pacotes").style.display = "none"
  }
  
function mostrar_mecanica() {
    document.getElementById("cards_producao").style.display = "none";
    document.getElementById("cards_mecanica").style.display = "contents";
    document.getElementById("cards_pacotes").style.display = "none"
}

function mostrar_pacotes() {
    document.getElementById("cards_producao").style.display = "none";
    document.getElementById("cards_mecanica").style.display = "none";
    document.getElementById("cards_pacotes").style.display = "contents"
}