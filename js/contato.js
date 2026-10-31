const form = document.getElementById("form-contato");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  aviso.textContent = "Valeu, " + nome + "! Sua mensagem foi enviada.";
  form.reset();
});
