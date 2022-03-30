const list = {
  task: '',
};

const ol = document.getElementById('lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');
const buttonRmv = document.querySelector('#apaga-tudo');
const buttonRmvCompleted = document.querySelector('#remover-finalizados');

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createLi(object) {
  const li = document.createElement('li');

  li.innerText = object.task;

  li.addEventListener('click', changeBackground);

  li.addEventListener('dblclick', completed);

  ol.appendChild(li);
}

function addTask() {
  list.task = document.getElementById('texto-tarefa').value;

  document.getElementById('texto-tarefa').value = '';

  createLi(list);
}

buttonAdd.addEventListener('click', addTask);

const li = document.getElementsByTagName('li');
function changeBackground(event) {
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('backgroundGray');
  }
  event.target.classList.add('backgroundGray');
}

function clearList() {
  for (let index = li.length - 1; index >= 0; index -= 1) {
    li[index].remove();
  }
}
buttonRmv.addEventListener('click', clearList);

// referência de pesquisa = https://www.w3schools.com/jsref/met_node_contains.asp'

function removeCompleted() {
  for (let index = li.length - 1; index >= 0; index -= 1) {
    if (li[index].classList.contains('completed')) {
      li[index].remove();
    }
  }
}
buttonRmvCompleted.addEventListener('click', removeCompleted);
