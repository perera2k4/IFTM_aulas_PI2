# Atividade Avaliativa 02

## 🎮 API de Games

## 🔗 Métodos HTTP
<div align="justify">
    
![GET](https://img.shields.io/badge/GET-69D695) http://localhost:3000/games, utilizado para buscar todos os elementos do banco de dados pela rota <strong>/games</strong>

![GETBYID](https://img.shields.io/badge/GET-69D695) http://localhost:3000/games/id, utilizado para buscar um elemento específico do banco de dados pela rota <strong>/games/id</strong>

![POST](https://img.shields.io/badge/POST-D3BE6F) http://localhost:3000/games/id, utilizado para adicionar um elemento ao banco de dados pela rota <strong>/games</strong>

![PUT](https://img.shields.io/badge/PUT-71A9ED) http://localhost:3000/games/id, utilizado para editar um elemento ao banco de dados pela rota <strong>/games</strong>

![PATCH](https://img.shields.io/badge/PATCH-BBA3DB) http://localhost:3000/games/id, utilizado para editar um elemento ao banco de dados pela rota <strong>/games</strong>

![DELETE](https://img.shields.io/badge/DELETE-D7887E) http://localhost:3000/games/id, utilizado para deletar um elemento ao banco de dados pela rota <strong>/games</strong>
</div>

## 📌 Contexto

Você foi contratado para desenvolver uma **API REST** para gerenciar uma coleção de **games**.
O sistema deverá permitir que usuários cadastrem, consultem, atualizem e removam informações de jogos, de forma organizada e segura.

---

## 📚 Requisitos da Atividade

### 🔹 Estrutura do Projeto

- Criar uma aplicação **Node.js** utilizando o **Express.js**.
- Usar variáveis de ambiente com o pacote **dotenv**.
- Conectar a aplicação ao banco de dados **MongoDB Atlas**.
- Estruturar o projeto em pastas (ex.: `models`, `controllers`, `routes`, etc).

### 🔹 Banco de Dados

- Criar um **Schema simples** para uma coleção de **games**, com pelo menos os seguintes campos:

  - `titulo` (string, obrigatório)
  - `genero` (string, obrigatório)
  - `plataforma` (string, obrigatório)
  - `lancamento` (número, obrigatório)

### 🔹 Funcionalidades (CRUD)

A API deve permitir:

1. **Criar** um novo game.
2. **Listar** todos os games cadastrados.
3. **Buscar** um game pelo seu ID.
4. **Atualizar** as informações de um game existente.
5. **Deletar** um game pelo ID.

### 🔹 Middlewares

- Utilizar **middlewares globais** (ex.: `express.json()`, `cors`).
- Implementar **middleware de erro centralizado** para tratar erros de:

  - Validação de dados.
  - IDs inválidos.
  - Erros internos do servidor.

- (Opcional para bônus) Criar um middleware específico para registrar (fazer um log) cada requisição recebida.

---

## 📌 Entregáveis

1. **Repositório no GitHub** com:

   - Código completo da aplicação.
   - Arquivo `.env.example` (com placeholders, sem expor credenciais reais).

2. **API funcional**, com as rotas testadas (POSTMAN).

   - Print ou exportação das requisições utilizadas nos testes.

3. **Readme.md** deve conter:

   - Descrição das funcionalidades implementadas.
   - Explicação dos middlewares criados.
   - Desafios encontrados e como foram resolvidos.
   - Instruções claras no `README.md` para rodar o projeto.

---

## 🎯 Critérios de Avaliação

- Funcionamento correto do CRUD.
- Conexão com MongoDB Atlas e uso de `.env`.
- Organização do código em pastas (boa arquitetura).
- Implementação correta dos middlewares.
- Clareza do `README.md`.

---

## 📌 Guia passo-a-passo

- Caso julgue necessário, preparei um [guia passo-a-passo](GUIA.md) para lhe auxiliar no desenvolvimento dessa atividade.

---
