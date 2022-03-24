let list = {
  task: '',
};

const ol = document.getElementById('lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');
const buttonRmv = document.querySelector('#apaga-tudo');

buttonRmv.addEventListener('click', clearList);

function createLi(object) {
  const li = document.createElement('li');

  li.innerText = object.task;

  li.addEventListener('click', changeBackground);
  li.addEventListener('dblclick', completed);

  ol.appendChild(li);
}

function addTask() {
  list.task = document.getElementById('texto-tarefa').value;

  localStorage.setItem(list.task, JSON.stringify(list));

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

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearList() {
  for (let index = 0; index < li.length; index += 1) {
    li[index].remove();
  }
}
