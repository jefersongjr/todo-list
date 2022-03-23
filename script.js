let list = {
  task: '',
};

const ol = document.getElementById('lista-tarefas');
const buttonAdd = document.querySelector('#criar-tarefa');

function createLi(object) {
  const li = document.createElement('li');

  li.innerText = object.task;

  li.addEventListener('click', changeBackground);

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
  event.target.classList = 'backgroundGray';
}
