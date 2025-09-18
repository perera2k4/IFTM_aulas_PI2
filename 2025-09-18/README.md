# Gerenciador de Alunos

Este projeto é um sistema simples de gerenciamento de alunos (CRUD - Create, Read, Update, Delete) implementado em HTML, CSS e JavaScript. Ele permite adicionar, listar e excluir alunos via uma interface web, interagindo com uma API backend (não incluída neste repositório) hospedada em `http://localhost:3000/alunos`.

## Funcionalidades

- **Adicionar Aluno**: Formulário para inserir nome, idade e curso de um novo aluno.
- **Listar Alunos**: Exibe uma lista de todos os alunos cadastrados, incluindo nome, idade, curso e data de adição.
- **Excluir Aluno**: Permite remover um aluno da lista com confirmação.
- **Interface Responsiva**: Design simples e limpo com estilos CSS.

Nota: A funcionalidade de atualização (Update) está comentada no código e não implementada.

## Estrutura dos Arquivos

- index.html: Estrutura da página web, incluindo o formulário e a lista de alunos.
- style.css: Estilos CSS para a aparência da interface.
- script.js: Lógica JavaScript para interagir com a API e manipular o DOM.

## Como Funciona

### index.html
Este arquivo define a estrutura HTML da aplicação:
- Cabeçalho com título "Gerenciador de alunos".
- Formulário (`#aluno-form`) com campos para nome, idade e curso, e um botão para adicionar.
- Lista não ordenada (`#alunos-list`) para exibir os alunos.
- Links para style.css e script.js.

### style.css
Fornece estilos visuais:
- Fundo da página em tom cinza claro.
- Estilos para formulário, botões, lista e itens da lista.
- Classes como `.curso` e `.data-adicao` para formatação específica de texto.
- Hover effects nos botões para melhor UX.

### script.js
Contém a lógica JavaScript:
- Define a URL da API (`http://localhost:3000/alunos`).
- Seleciona elementos do DOM (formulário, inputs, lista).
- **Adicionar Aluno**: Event listener no formulário que envia uma requisição POST para a API com os dados do novo aluno, limpa os campos e recarrega a lista.
- **Carregar Alunos**: Função assíncrona que faz uma requisição GET para a API, parseia o JSON e renderiza a lista no DOM, incluindo botões de ação.
- **Deletar Aluno**: Função que confirma a exclusão e envia uma requisição DELETE para a API, recarregando a lista após.
- A função `carregarAlunos()` é chamada na inicialização para exibir os dados existentes.

## Pré-requisitos

- Um servidor backend rodando em `http://localhost:3000` que suporte as rotas:
  - `GET /alunos`: Retorna lista de alunos (JSON com campos como `_id`, `nome`, `idade`, `curso`, `createdAt`).
  - `POST /alunos`: Cria um novo aluno (corpo JSON com `nome`, `idade`, `curso`).
  - `DELETE /alunos/:id`: Remove o aluno pelo ID.

## Como Usar

1. Abra index.html em um navegador web.
2. Preencha o formulário e clique em "Adicionar" para criar um aluno.
3. A lista será atualizada automaticamente.
4. Clique em "Excluir" em um item da lista para removê-lo (com confirmação).

Certifique-se de que o backend esteja rodando para que as operações funcionem corretamente. Para desenvolvimento, use um servidor local como Live Server no VS Code.