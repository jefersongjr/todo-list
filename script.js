let list = {
  task: '',
};

const ol = document.getElementById('lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');

function createLi(object) {
  const li = document.createElement('li');

  li.innerText = object.task;

  ol.appendChild(li);
}

function addTask() {
  list.task = document.getElementById('texto-tarefa').value;

  localStorage.setItem(list.task, JSON.stringify(list));

  document.getElementById('texto-tarefa').value = '';

  createLi(list);
}

buttonAdd.addEventListener('click', addTask);
