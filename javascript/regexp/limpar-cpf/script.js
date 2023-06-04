const cpfsList = document.querySelectorAll(".cpf li");

// Retorna o texto de cada Li
const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const contruirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(contruirCPF);
};

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
  console.log(cpfsFormatados);
};
substituirCPFS(cpfsList);


