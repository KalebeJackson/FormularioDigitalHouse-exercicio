//selecionando o botão de Add
const buttonAdd = document.getElementById("btnAdd");
//selecionando o input
const inputTask = document.getElementById("form12");

const tasklist = document.querySelector(".task-list");

const mainTag = document.querySelector("main");

const senha1 = document.getElementById('senha1');

const senha2 = document.getElementById('senha2');

const post = `<button id="btnAdd" class="btn btn-primary">add</button>`;

function checkTask(taskLi) {
  taskLi.classList.add("done");
}

function createTask(task) {
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");

  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "/icons/close.png");

  const imgCheck = document.createElement("img");
  imgCheck.setAttribute("src", "/icons/check.png");

  imgCheck.onclick = () => {
    checkTask(li);
  };

  const p = document.createElement("p");
  p.textContent = task;

  li.appendChild(imgClose);
  li.appendChild(p);
  li.appendChild(imgCheck);

  tasklist.appendChild(li);
}

buttonAdd.onclick = () => {
  //pegando o valor do input
  const newTask = inputTask.value;

  createTask(newTask);

  inputTask.value = "";
};

//validando as senhas
function validacao() {
  const senha = formulario.senha.value;
  const rep_senha = formulario.rep_senha.value;

  if (senha == "" || senha.length < 5) {
    alert("preencha o campo com no mínimo 5 caracteres");
    formulario.senha;
    return false;
  }

  if (rep_senha == "" || rep_senha.length < 5) {
    alert("preencha o campo com no mínimo 5 caracteres");
    formulario.senha;
    return false;
  }

  if (senha != rep_senha) {
    senha1.style.borderColor = "red";
    senha2.style.borderColor = "red";
  } else {
    senha1.style.borderColor = "green";
    senha2.style.borderColor = "green";
  }
}

function adicionar(){
  // alert('oi')
  buttonAdd.innerHTML = post
}

buttonAdd.addEventListener('load', function(){
  mainTag.removeChild(buttonAdd);
})