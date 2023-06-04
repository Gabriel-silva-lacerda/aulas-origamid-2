const links = document.querySelectorAll('a');

// muda o link da página 
function handleClick(event) {
   event.preventDefault();
   fetchPage(event.target.href);
   window.history.pushState(null, null, event.target.href)
};

// pega o valor da URL e muda para texto 
async function fetchPage(url) {
   document.querySelector('.content').innerHTML = 'Carregando'
   const pageResponse = await fetch(url);
   const pageText = await pageResponse.text();
   replaceContent(pageText);
};

// cria uma novo html sem precisar dar refresh na página 
function replaceContent(newText) {
   const newHtml = document.createElement('div');
   newHtml.innerHTML = newText;

   const oldContent = document.querySelector('.content');
   const newmContent = newHtml.querySelector('.content');

   oldContent.innerHTML = newmContent.innerHTML;
   document.title = newHtml.querySelector('title').innerText
};

// adiona á pagina ao clicar no botão de voltar 
window.addEventListener('popstate', () => {
   
   fetchPage(window.location.href);
});

links.forEach((link) => {
   link.addEventListener('click', handleClick);
});