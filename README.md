  <img src="./logo-m.png">
  
<h1><span style="color:blue">
<font size=30>My Group</font></span></h1>

<h1><span style="color:blue">
<font size=30>Índice</font></span></h1>

- [Sobre o site](#Sobre-o-Site)
- [Atualizações](#Atualizações)
- [Instalação](#Instalação)
- [Como Usar o Site](#Como-usar-o-Site)
- [Acessando o Site](#Acessando-usar-o-Site)
- [Funcionalidades](#Funcionalidades)
- [Novas Versões](#Novas-Versões)
- [Issues](#Issues)
- [License](#License)
- [Contribuição](#Contribuição)

<h1><span style="color:blue">
<font size=30>Sobre o Site</font></span></h1>
<img src="icon.png" align="right" />


📜 Para a confecção do site, as principais ferramentas utilizadas, foram: JS ES6, Mongo DB, Express, jsonwebtoken, multer.
<br>
📜 Combinando com os métodos: GET, POST, PUT e DELETE. Veja as tabelas abaixo.
<br>
📜 Também foi implementado uma parte para a atualização e edição de imagem.
<br>
📜 As rotas foram confeccionada para garantir, a privacidade do usuário, assim há rotas privativas, onde cada usuário acessa o seu perfil, rotas administrativas, one é passado acesso total para adicionar, editar, listar, deletar qualquer informação do usuário.
<br>

<h1><span style="color:blue">
<font size=30>🛠 Instalação</font></span></h1>

📌 [Como usar o Site](https://github.com/ai/size-limit#readme) - O Site não precisa de recursos extras, apenas clique no link e já terá acesso a todas funcionalidades.

📌 [Acessando o Site](https://github.com/ai/size-limit#readme) - Nosso Site pode ser acessado diretamente pelo link.


<h1><span style="color:blue">
<font size=30>📋 Meta
</font></span></h1>

> :construction: Novas Versões do Site :construction:

📌 [Objetivos](https://github.com/ai/size-limit#readme) do Site será, colocar uma área com vários níveis de privilégios, de acordo com o qualificação de cada usuário.



<h1><span style="color:blue">
<font size=30>📋 Principais aplicações para a confecção do Site
</font></span></h1>

```javascript
|         Javascript            |
| ----------------------------- | 

| Classes                       |
| map()                         |
| try / catch                   |
| async / await                 |
| mongoose                      |  
| Schema                        |
| jwt                           |
| verify()                      |
| authorization                 |
| bcrypt()                      |
| genSalt()                     |
| next()                        |
| findOne()                     |
| findById()                    |
| findOneAndUpdate()            | 
| getUserByToken()              |
| cors()                        |
| push()                        |
| find()                        |
| toString()                    |

```




```javascript
|          CRUD - USER        |
| --------------------------- | 

| method | endpoint           | body        | response    | action                                 |
| ------ | ------------------ | ----------- | ----------- | -------------------------------------- |
| POST   | /users             |  { user }   |  { user }   | cria um usuário no banco de dados      |
| GET    | /users             |    -/-      | [{ user }]  | lista de usuários                      |
| PUT    | /users/:userId     |  { user }   |  { user }   | atualiza um usuário no banco de dados  |
| DELETE | /users/:userId     |     -/-     |  message    | remove um usuário do banco de dados    |
  
```

```javascript
|          CRUD - I Like      |
| --------------------------- | 

| method | endpoint           | body         | response    | action                                 |
| ------ | ------------------ | ------------ | ----------- | -------------------------------------- |
| POST   | /like              |  { like }    |  { like }   | cria um like no banco de dados         |
| GET    | /like              |    -/-       | [{ like }]  | lista de Likes                         |
| PUT    | /like/:likeId      |  { like }    |  { like }   | atualiza um like no banco de dados     |
| DELETE | /like/:likeId      |    -/-       |  message    | remove um Like do banco de dados       |
   
```


<h1><span style="color:blue">
<font size=30>📋 License
</font></span></h1>

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


To the extent possible under law, Hercules Ferreira Ribeiro has waived all copyright and related or neighboring rights to this work.

<h1><span style="color:blue">
<font size=30>🐛 Issues</font></span></h1>

Contate me através do github

<h1><span style="color:blue">
<font size=30>🚀 Contribuição
</font></span></h1>

1. Faça o _fork_ do projeto
2. Crie uma _branch_ para sua modificação (`git checkout -b meu-novo-recurso`)
3. Faça o _commit_ (`git commit -am 'Adicionando um novo recurso...'`)
4. _Push_ (`git push origin meu-novo-recurso`)
5. Crie um novo _Pull Request_

**Happy coding!** :heart:

 <br>

[Back to top](#faqs)
