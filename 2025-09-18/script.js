const API_URL = "http://localhost:3000/alunos";

//Selecionar os elementos do frontend
const alunosList = document.getElementById("alunos-list");
const form = document.getElementById("aluno-form");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");

//Funções
//Função para criar um novo registro
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const novoAluno = {
    nome: nomeInput.value,
    idade: parseInt(idadeInput.value),
    curso: cursoInput.value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoAluno),
  });

  nomeInput.value = "";
  idadeInput.value = "";
  cursoInput.value = "";
  carregarAlunos();
});

//Função para listar os registros já criados
async function carregarAlunos() {
  const res = await fetch(API_URL); //Extender a sintaxe do fetch api
  const alunos = await res.json();

  alunosList.innerHTML = "";
  alunos.forEach((aluno) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${aluno.nome} (${aluno.idade} anos)<br><span class="curso">${aluno.curso}</span>, <span class="data-adicao">Adicionado em: ${aluno.createdAt}</span></span>
        <div class="actions">
            <button class="editar" onclick="atualizarAluno('${aluno._id}')">Atualizar</button>
            <button class="excluir" onclick="deletarAluno('${aluno._id}')">Excluir</button>
        </div>
        `;
    alunosList.appendChild(li);
  });
}

//Função para apagar um registro
async function deletarAluno(id) {
  let text = "Deseja realmente excluir o aluno?";
  if (confirm(text) == true) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    carregarAlunos();
  } else {
  }
}

//Função para atualizar um registro
/* Exemplo de uso:
async function atualizarAluno(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const aluno = await res.json();
  nomeInput.value = `${aluno.nome}`;
  idadeInput.value = `${aluno.idade}`;
  cursoInput.value = `${aluno.curso}`;
}
*/

// Chamada final da função carregar
carregarAlunos();
