// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuida;
  this.andar = function() {
    console.log(this.nome + 'andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('Joao', 20 + ' anos');
const maria = new Pessoa('Maria', 25 + ' anos');
const bruno = new Pessoa('Bruno', 15 + ' anos');

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}

const listaItens = new Dom('li');
listaItens.addClass('ativar');


