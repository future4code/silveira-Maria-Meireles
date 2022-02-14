# Aprendizados da semana

Durante essa semana, eu aprendi sobre o terminal, git e gitHub.
O **terminal** é um programa sem interface gráfica que nos permite navegar entre os arquivos e pastas
no computador, e fazer modificações neles. Ele funciona através de uma série de comandos,
e seu uso é vantajoso porque ele é mais rápido, e também acessa camadas onde a interface GUI não vai.
Aprendi que o **git** é uma ferramenta de versionamento de código, muito importante no dia-a-dia de um dev.
O versionamento permite que façamos alterações em nossas próprias versôes de um código, sem afetar o 
funcionamento do código principal. Ele tmbém permite que várias pessoas trabalhem simultameamente em 
diferentes ramificações de um mesmo projeto. Com ele podemos também navegar pelo histórico de alterações 
já feitas à fim de monitorar, ou resgatar uma versão mais antiga de um sotware. Também é um método muito mais seguro, uma vez que as alterações em um código só são adicionadas com a autorização do dono daquele código.
O **GitHub** é uma plataforma de hospedagem de repositórios. Através dele podemos enviar nossos repositórios locais para um repositório remoto, de onde as pessoas podem ter acesso ao nosso código.
Aprendi também alguns comandos de terminal e git.
**_"mkdir"_** cria pastas, _"touch"_ cria arquivos, _"grep"_ busca por um termo em um arquivo, _"cat"_ exibe o conteúdo do arquivo, _"cd"_ muda de pasta, _"mv"_ move o arquivo e também permite renomeá-lo, _"cp"_ copia os arquivos, _"ls"_ lista os arquivos no diretório em que estamos, _"head_" mostra por padrão as 10 primeiras linhas de um arquivo, e _"tail"_, as 10 últimas.
Aprendi um pouco de ciclo do git também:

1°) _git clone (url)_: Usaremos esse apenas uma vez, para copiar o repo remoto no nosso local;
1.1) É interessante dar "git status" entre cada um dos processoas pra saber se tudo está correndo como o esperado.
2°) _git add (nomeDoArquivo)_, ou _git add ._: Envia nossos arquivos alterados para a area de staging, onde eles ficam esperando para serem commitados;
3°) _git commit -m "mensagem"_: Vai demarcar aquela nova versão do nosso projeto, e enviá-la para nosso repositório local. 
4°) Agora só resta enviar para o repositório remoto, e pra isso, vamos usar as branches.
Uma **branch** é uma ramificação que fazemos em um projeto. A estrutura de um projeto é composta por uma branch _main_, que carrega a parte principal, e as _ramificações (branches)_ feitas por outros usuários.
Fazendo uso disso, podemos contribuír com uma versão diferente, sem afetar o projeto principal.
E caso o dono do projeto goste de nossa alteração, podemos abrir um _PR_, esperar que ele aprove, e fazer o _merge_ para nossas alterações irem para a branch main.

1°) _git branch_: Vai mostrar em qual branch estamos;
2°) _git checkout -b (nome)_: Vai criar e acessar uma nova branch;
3°) _git push (nomeDaBranch)_: Vai enviar as alterações já commitadas naquela branch para o repo remoto.
Agora, caso o repositório remoto não seja apenas seu, falta só abrir o PR e esperar pela aprovação. :)