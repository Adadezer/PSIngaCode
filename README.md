# Processo Seletivo Verzel

## ⚙️ Como Utilizar

1- Abra o terminal, clone o projeto e entre em sua pasta:

- `git@github.com:Adadezer/PSIngaCode.git`

- `cd PSVerzel`

2- Entre na pasta do frontend, instale as dependências e inicie a aplicação:

- `cd frontend`

- `npm install`

- `npm start`

## 📌 Considerações
 1. O teste não tem o backend pronto, somente a rota para exibir as tarefas está pronta
 2. Mesmo sem backend, o frontend está funcional. Foi usado uma ferramenta chamada `MockAPI` para gerar automaticamente o backend com algumas configurações mínimas
3. Para testar a rota de exibição de tarefas no backend, siga as instruções abaixo:
	3.1. Partindo da pasta raiz do teste (IngaCode), entre na pasta do backend:
	
	- `cd backend`
	
	3.2. O banco de dados usado no projeto é o MySQL, e o ORM é o Prisma, é necessário criar um arquivo `.env` na raiz da pasta backend, e adicionar as configurações para a criação do banco. Crie o arquivo e adicione o seguinte conteúdo:

```
DATABASE_URL="mysql://{usuário do banco}:{senha do banco}@localhost:3306/psingacode?schema=public"

APP_PORT=3001
```
existe um arquivo de exemplo que poderá ser consultado.

3.3. Instale as dependências:

- `npm install`

3.4. Suba o banco de dados com o seguinte comando:

- `npx prisma migrate dev`
no terminal será perguntado o nome da migration, digite qualquer nome, se preferir uma sugestão digite (dbIngaCode)

3.5. Inicie o servidor:

- `npm run dev`
irá aparecer uma mensagem do tipo `Api rodando na porta 3001`

4- Com o backend rodando, você poderá iniciar o frontend como descrito acima. 

Dentro da pasta `frontend`, na pasta `pages`, no arquivo `tasks`, na função `getTasks` por volta da linha 23, a variável com o url usado no backend está comentada. Descomente ela, comente a url do mockAPI, e na linha 25 insira a url do backend na requisição axios. A pagina das tarefas irá exibir em seus cards as informações do banco de dados, mas como existe somente essa rota pronta até o momento, o resto da aplicação não irá funcionar.

Use a url do `mockAPI` para ver o CRUD de taredas funcionando.
