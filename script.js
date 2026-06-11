const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");
const botaoMensagem = document.getElementById("botao-mensagem");
const mensagem = document.getElementById("mensagem");

botaoMenu.addEventListener("click", function () {
  listaMenu.classList.toggle("ativo");
});

botaoMensagem.addEventListener("click", function () {
  mensagem.textContent =
    "Valorizar a comunidade é reconhecer sua história, respeitar seu território e cuidar da natureza para as próximas gerações.";
});

const linksMenu = document.querySelectorAll("#lista-menu a");

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    listaMenu.classList.remove("ativo");
  });
});
const fotos = document.querySelectorAll(".foto");
const modalImagem = document.getElementById("modal-imagem");
const imagemAmpliada = document.getElementById("imagem-ampliada");
const fecharModal = document.getElementById("fechar-modal");


fotos.forEach(function (foto) {
  foto.addEventListener("click", function () {
    modalImagem.classList.add("ativo");
    imagemAmpliada.src = foto.src;
    imagemAmpliada.alt = foto.alt;
  });
});

fecharModal.addEventListener("click", function () {
  modalImagem.classList.remove("ativo");
});

modalImagem.addEventListener("click", function (evento) {
  if (evento.target === modalImagem) {
    modalImagem.classList.remove("ativo");
  }
});
