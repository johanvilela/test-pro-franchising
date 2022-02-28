# Avaliação Técnica Pro Franchising #

## Como executar o projeto ##

Clone o repositório e execute os seguintes comandos na pasta do projeto:

1. `npm install` ou `yarn`;
2. `npm run dev` ou `yarn dev`;

Para visualizar o projeto, abra `http://localhost:3000`

## Sobre a avaliação ##

Tecnologia: React ou React Native

API: Documentação: prova.deploy.profranchising.com.br

Documentação: https://prova.deploy.profranchising.com.br/swagger-ui.html

Objetivo:
* Desenvolver uma aplicação frontend implementando as rotas REST API.
* Essa aplicação ira resolver o cadastro de produtos e suas receitas.
* A aplicação deve ser facil de utilizar e agradavel ao usuário.

## Telas ##

### Tela de Login
* O usuásio informa o username e password;
* Caso esteja cadastrado, será redirecionado para a tela Dashboard;

### Tela de listagem de produtos (Dashboard) ###
* Exibe todos os produtos cadastrados no sistema;
* Contém paginação;
* Cada item da lista contém imagem, nome, preço e lista de ingredientes;
* O botão `Add` redireciona para a página `products/add`


### Tela de cadastro de produto  ###
* Contém um formulário que recebe os dados de nome, preço, imagem e lista de ingredientes;
* Cada ingrediente da lista deve ter um nome, quantidade e custo;
* Ao clicar no botão `Add Product` o produto é inserido e o usuário é redirecionado para a `Dashboard`

### Requisitos ###
* Tela de login (proteger rotas)
* Lista de itens com paginação
* Editar item
* Remover item
* Adicionar item
* Validação nos formulários
* Criar repositório no GitHub

*Pode usar qualquer biblioteca que julgue necessário.
