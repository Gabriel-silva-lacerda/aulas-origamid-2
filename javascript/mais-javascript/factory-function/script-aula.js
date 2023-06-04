// function creatButton(text) {
//     const numeroSecreto = 'dasdsdgr6545';

//     function element() {
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         return buttonElement
//     }
//     return {
//         text,
//         element,
//         numeroSecreto
//     }
    
// };

// const btnComprar = creatButton('Comprar');
// const btnVender = creatButton('Vender');

function Pessoa(nome) {
    if (!(this instanceof Pessoa)) // ou (!new.target)
      return new Pessoa(nome);
    this.nome = nome;
  }
  
  Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa('André');

  console.log(designer);
  