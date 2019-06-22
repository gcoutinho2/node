/* 

req - requisição, pegar todos os tipos de parametros
res - resposta que vamos dar para a requisição

Ferramenta nodemon
-npm install -D nodemon

Docker - Software que permite fazer a conteirnização na máquina 
Consegue fazer todas as intalações em containers, subindo máquina virtual e em qualquer momento
que precisar alterar fica mais fácil, não mexe nada no sistema da máquina.

Após instalação do Docker, através da linha de comando efetuar a instalação do mongoDB
-docker pull mongo

Fazer o redirecionamento de portas do mongoDb
-docker run --name mongodb -p 27017:27017 -d mongo

-name = NOME DO CONTAINER NO SISTEMA
-p = MONGO VAI TA RODANDO EM OUTRO SISTEMA, PRECISA FAZER O REDIRECIONAMENTO DE PORTA
27017 = PORTA PADRÃO DO MONGODB (porta da máquina : porta do mongodb)
-d = QUAL IMAGEM UTILIZAR

Baixar o software Robo 3T
Serve para verificar se os dados estão sendo criados corretamente.

-npm install mongoose
ORM - Encapsula as lógicas das operações do BD atrabés do código, ao inves de utilizar
queries, linguagem do banco (insert, update ...) Ele serve pra utilizar apenas codigos
JS. Transforma nossas tabelas do BD em objetos no JS.

Devido a quantidade de models que podem ter em um projeto, é bom usar uma biblioteca
-npm install require-dir

Instalar o insomnia rest (tipo um swagger)

Instalar o mongoose paginate (paginação de lista de propriedades)
-npm install mongoose-paginate

Serve para liberar o acessa publico das apis
-npm install cors

*/