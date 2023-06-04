async function puxarDados() {
   const promiseDados = fetch('./dados.json');
   const responseCLientes = fetch('./clientes.json');

   const jsonDados = await (await promiseDados).json();
   const jsonClientes = await (await responseCLientes).json();

   console.log(jsonDados);
   console.log(jsonClientes);
  
}
puxarDados();
