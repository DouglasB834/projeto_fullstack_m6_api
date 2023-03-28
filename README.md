# S5-19 | 🏁 Entrega: desafio full stack

### Este projeto consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

### Como rodar o projeto

- [Back end](#back-end)
- [Front end](#front-end)

<br>

![Library](m6.drawio.png)

# comandos basicos

### faça o clone deste repositírio

```
git clone git@github.com:DouglasB834/projeto_fullstack_m6_api.git
```

- Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas.
  Portanto utilize o comando abaixo para instalar tais dependências:
  se atente em fazer isso em ambos as pastas tanto no back quando no front

```
 npm install
```

# Back-end

## Rodando back end

- Abra um terminal na sua pasta principal
- rode o comando $ cd back/ ja dentro da pasta, para inicar o banco de dados
- Ja na pasta usar comando npm install
- **Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local
- use o comando para criar as Migrations
- com as migrations criadas rode **npm run dev**
- <br>

```
yarn typeorm migration:run -d src/data-source
```

<br>

### Rodar o servidor.

Com isso feito, para rodar sua aplicação, basta utilizar o comando

```
npm run dev
```

<br>

# Front-end

## Como rodar a parte do Front end

- abrir terminal
- rode comando $ **_ cd front_phonebook/_**
- faça o comando npm install
- comando para rodar o serve **_npm run dev_**

<br>

# Rotas para User

## POST /users - Criar um usuário / cadastrar

#### Não precisa de autenticação.

##### Campos que você deve passar:

- name - Deve ser uma string
- email - Deve ser uma string e ser um email
- password - Deve ser uma string
- phone - Deve ser um string

#### Retorno esperado

##### Status 201 created

```json
{
  "updatedAt": "2023-01-12T02:54:08.442Z",
  "createdAt": "2023-01-12T02:54:08.442Z",
  "isActive": true,
  "phone": "21971717171",
  "email": "kenzinho3@mail.com",
  "name": "Kenzinho3",
  "id": "f88a2de8-ccf0-43e7-86dd-9280b4f3d20d"
}
```

## POST /login - Logar com usuário

#### Não precisa de autenticação.

##### Campos que você deve passar:

- email - Deve ser uma string e ser um email
- password - Deve ser uma string

#### Retorno esperado

##### Status 200 ok

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjczNTQyNTg2LCJleHAiOjE2NzM2Mjg5ODYsInN1YiI6ImYyZDE4NjI5LWJkMGEtNDE0OS04NWMxLTliMzA5YzgwNWVjYiJ9.DiD53VhBXgBNwagZ_feONii53rnyT8QdcI2pUd2NzUQ"
}
```

## GET /users - Pegar todos os usuários

#### Não precisa de autenticação.

##### Essa rota não possui body.

#### Retorno esperado

##### Status 200 ok

```json
[
	{
		"updatedAt": "2023-01-12T02:52:54.492Z",
		"createdAt": "2023-01-12T02:52:54.492Z",
		"isActive": true,
		"phone": "21971717171",
		"email": "kenzinho@mail.com",
		"name": "Kenzinho",
		"id": "f2d18629-bd0a-4149-85c1-9b309c805ecb"
	},
	...
]
```

## GET /users/:id - Pegar um usuário pelo id

#### Precisa de autenticação.

##### Essa rota não possui body.

#### Retorno esperado

##### Status 200 ok

```json
{
  "updatedAt": "2023-01-12T02:52:54.492Z",
  "createdAt": "2023-01-12T02:52:54.492Z",
  "isActive": true,
  "phone": "21971717171",
  "email": "doug@mail.com",
  "name": "doug",
  "id": "f2d18629-bd0a-4149-85c1-9b309c805ecb"
}
```

## PATCH /users/:id - Atualizar informações de um usuário

#### Precisa de autenticação.

##### Campos que você deve passar:

Todos os campos são opcionais.

- name - Deve ser uma string
- email - Deve ser uma string e ser um email
- password - Deve ser uma string
- phone - Deve ser um string
- avatar - Deve ser uma string e url de uma imagem válida

#### Retorno esperado

##### Status 200 ok

```json
{
  "createdAt": "2023-01-12T02:52:54.492Z",
  "updatedAt": "2023-01-12T02:53:15.662Z",
  "avatar": "img",
  "phone": "21971717171",
  "email": "kenzinho@mail.com",
  "name": "Kenzinho"
}
```

## DELETE /users - Deletar um usuário

#### Precisa de autenticação.

##### Essa rota não possui body.

#### Retorno esperado

##### Status 204 No content

Não possui body de retorno.

# Rotas de Contatos / contact

## POST /contact - Criar um contato

#### Não precisa de autenticação.

##### Campos que você deve passar:

- name - Deve ser uma string
- email - Deve ser uma string e ser um email
- phone - Deve ser um string

#### Retorno esperado

##### Status 201 created

```json
{
  "name": "doug",
  "email": "douglas@mail.com",
  "phone": "21983003101"
}
```

## Get /contact -Listando user

##### Essa rota não possui body.

##### Status 200 list

```json
{
     [
		{
			"id": "999b1c40-f2a1-4254-9cc6-ac30ac08c2e9",
			"name": "camila",
			"email": "camila@mail.com",
			"phone": "21983003101",
			"createdAt": "2023-03-21T15:45:09.194Z"
		},
		{
			"id": "e10a7a04-aef7-4d5d-9e28-1e5295456e08",
			"name": "jujuba",
			"email": "jujuba@mail.com",
			"phone": "21983003101",
			"createdAt": "2023-03-21T18:41:44.699Z"
		}
	]
}
```

## Get /contact -Listando um contato

##### Essa rota não possui body.

##### Status 200 list

```json
{
  "id": "b6600708-0fce-44e8-bd2a-2c890e5d169f",
  "name": "Lorena",
  "email": "Lorena@mail.com",
  "phone": "21983003100",
  "createdAt": "2023-03-22T13:45:03.079Z"
}
```

## patch /contact - atualizando contato

##### Campos que você deve passar:

- name - Deve ser uma string
- email - Deve ser uma string e ser um email
- phone - Deve ser um string

#### Retorno esperado

##### Status 200 created

```json
{
  "name": "jujuba",
  "email": "jujuba@mail.com",
  "phone": "21983003101"
}
```

## DELETE /contact - Deletar um contato

#### Precisa de autenticação.

##### Essa rota não possui body.

#### Retorno esperado

##### Status 204 No content

Não possui body de retorno.
