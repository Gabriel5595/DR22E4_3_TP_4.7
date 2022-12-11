// const nomeF = document.getElementById("nomeF").value;
// const cargoF = document.getElementById("cargoF").value;
// const salarioF = document.getElementById("salarioF").value;
// const secaoF = document.getElementById("secaoF").value;
const dados = [];

function guardaDados() {
  const novosDados = {
    nome: document.getElementById("nomeF").value,
    cargo: document.getElementById("cargoF").value,
    salario: document.getElementById("salarioF").value,
    secao: document.getElementById("secaoF").value,
  };
  dados.push(novosDados);
  console.log(dados);
  return true;
}