const principal = document.getElementsByTagName('body')[0];

const tarefas = {
  tarefa: ' ',
};

function createHeader() {
  const header = document.createElement('header');
  principal.appendChild(header);
}

createHeader();

const header1 = document.getElementsByTagName('header')[0];
function createH1() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Minha Lista de Tarefas';
  header1.appendChild(h1);
}

createH1();

function createP() {
  const p = document.createElement('p');
  p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  p.id = 'funcionamento';
  p.style.color = 'gray';
  header1.appendChild(p);
}

createP();

function createInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  header1.appendChild(input);
}

createInput();

function createOl() {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  header1.appendChild(ol);
}

createOl();

function createButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'adicionar';
  header1.appendChild(button);
}

createButton();
