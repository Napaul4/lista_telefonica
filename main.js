const form = document.getElementById('data-form');
const inputTelefone = document.getElementById("telefone");
const inputContato = document.getElementById('nome');
const telefones = [];
const contatos = [];

let linhas = '';

function mascaraFone() {

  let valor = inputTelefone.value.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.substr(0, 11); 
  }

  if (valor.length > 10) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (valor.length > 6) {
    valor = valor.replace(/^(\d{2})(\d{4,5})(\d{0,4})/, "($1) $2-$3");
  } else if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    valor = valor.replace(/^(\d*)/, "($1");
  }

  inputTelefone.value = valor;
}

inputTelefone.addEventListener("input", mascaraFone);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
})

function adicionaLinha() {
  
  if (telefones.includes(inputTelefone.value)) {
    alert(`O número de telefone: ${inputTelefone.value} já está vinculado a um contato`)
  } else {
    
    telefones.push(parseInt(inputTelefone.value));
    contatos.push(inputContato);

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
  }

  inputContato.value = '';
  inputTelefone.value = '';

}

function atualizaTabela () {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}