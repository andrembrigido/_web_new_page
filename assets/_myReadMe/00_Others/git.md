________Novo Projeto________

git init
git add <file name> ou git add .
git commit -m "message"
git remote add origin <server url>
git push <server name> <branch name>

________Em Trabalho________

git add <file name> ou git add .
git commit -m "message"
git push <server name> <branch name>
pull request
merge
git pull

________Git Study________
Instale o Git
Configure Nome de usuario e email

No PC
Crie uma pasta de projetos - Ex.: m1cp
Crie uma pasta de projetos da linguagem escolhida - ex.: flutter
Abra o VSCode

No VSCode
Abra a pasta de projetos da linguagem escolhida
Click F1 - inicie um projeto flutter. Ex.: fluterrando_masterclass4
De um nome ao porjeto
Click Ctrl+J, va para a aba terminal

No VSCode Terminal
git init - vai criar um repositorio local
Ao fazer isso os arquivos no VSCode ficaram com a letra U do lado, indicando que esses aquivos ainda NAO EXISTEM dentro do seu repositorio local
git add <file name> ou git add . - prepara os arquivos modificados para serem commitados, ao fazer isso os arquivos preparados ficaram com a letra A do lado
git commit -m "message" - Empacota/Encapsula todas as alteracoes preparadas, (coleque uma mensagens explicando quais as alteracoes estao dentro do commit)

No site do GitHub
Crie um repositorio no GitHub
De preferencia em colocar o mesmo nome do projeto que voce criou
Ex.: fluterrando_masterclass4
Copie url  do servidor -
Ex.: git@github.com:andrembrigido/flutterando_masterclass4.git

No VSCode Terminal
git remote add origin <server url> - ele vai linkar seu repositorio local, com o repositorio da url
Ps.: Origin e o nome padrao para servidores
git push <server name> <branch name>- para subir as alteracoes locais, para o repositorio da nuvem da branch desejada
 Ex.: git push origin main
<server name> - Origin e o nome padrao para servidores

<AQUI SEU PROJETO JA ESTARA CRIADO, E ESTARA NO GITHUB, COMECA A PRODUZIR E QUANDO TERMINAR SIGA OS PASSOS A BAIXO>

No site do GitHub
pull request - voce vai solicitar que o adm analise suas alteracoes
merge - se o adm aceitar as suas alteracoes, ele vai juntar suas alteracoes a branche master,  NAO EXCLUA A BRANCH DO GITGUB
Exclua a branch do seu computar. DEIXE SEMPRE A ULTIMA BRANCH.

No VSCode
Na parte de baixo onde mostra em qual branch voce esta, agora voce tera um simbolo de reciclagem, indicando que ha atualizacoes novas na master da nuvem, que voce nao tem em sua master local

No VSCode Terminal
git pull <servidor> <branch>- vai baixar as alteracoes da sua master da nuvem, para sua master local. Ex.: git pull origin master