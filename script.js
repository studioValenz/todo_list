let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

let renderTarefas = () => {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Deletar");
    linkElement.appendChild(linkText);

    let posicao = tarefas.indexOf(todo);

    linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`);

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });
};

let adcionarTarefas = () => {
  if (inputElement.value === "") {
    alert("Digite alguma tarefa");
    return false;
  } else {
    let novaTarefa = inputElement.value;

    tarefas.push(novaTarefa);
    inputElement.value = "";

    renderTarefas();
  }
};

buttonElement.onclick = adcionarTarefas;

let deletarTarefas = (posicao) => {
  tarefas.splice(posicao, 1);
  renderTarefas();
};
