# CRUD App

Este é um projeto simples de CRUD (Create, Read, Update, Delete) construído com Node.js, Express e Mongoose.

## Descrição

Este projeto demonstra um exemplo básico de um CRUD utilizando Node.js com o framework Express e o Mongoose para interagir com um banco de dados MongoDB. A aplicação permite criar, ler, atualizar e deletar registros em uma coleção do MongoDB.

## Funcionalidades

- Criar novos registros
- Listar todos os registros
- Obter um registro específico pelo ID
- Atualizar um registro pelo ID
- Deletar um registro pelo ID

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

## Requisitos

- Node.js v14 ou superior
- MongoDB

## Instalação

1. Clone o repositório para sua máquina local:
    ```sh
    git clone https://github.com/igormacedo97/api_node
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install
    ```

4. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes linhas (substitua `<MONGO_URI>` pelo URI do seu banco de dados MongoDB):
    ```env
    MONGO_URI=<MONGO_URI>
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm start
    ```

2. Acesse a aplicação em `http://localhost:3000`

## Rotas da API

- `GET /` - Lista todos os itens
- `GET /:id` - Obtem um item pelo ID
- `POST /` - Cria um novo item
- `PUT /:id` - Atualiza um item pelo ID
- `DELETE /:id` - Deleta um item pelo ID

## Estrutura do Projeto

```plaintext
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── src
│   └── index.js
