const principal = document.getElementsByTagName('body')[0];

function createHeader() {
  const header = document.createElement('header');
  principal.appendChild(header);
}

createHeader();

function createH1() {
  const header1 = document.getElementsByTagName('header')[0];
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas';
  header1.appendChild(h1);
}

createH1();
