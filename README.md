#ProjetoAEB

Para executar esse projeto, é necessário primeiramente ter instalado em sua maquina o Nodejs em sua máquina (https://nodejs.org/en/), qualquer versão, de preferência a mais recente. Depois de baixar, você deve acessar o cmd, terminal a depender do seus sistema operacional, acessar a pasta na qual estão os arquivos deste projeto e digitar o comando "(sudo)* npm install" *apenas para usuários MAC ou linux*. Este processo demora um pouco, após encerrar a instalação, digite o comando "(sudo)* npm run serve" *apenas para usuarios MAC ou linux* e pronto, o serviço vai estar rodando e abrira uma página no seu navegador com o endereço "http://localhost:8000" utilizando-se do lite-serve (OBS: Recomenda-se a instalação da extensão Allow-Control-Allow-Origin: pois alguns navegadores apresentam alguns problemas com o lite-serve https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi).


OBS:
Caso o serviço não funcione, inspecione a página (Atalho F12, caso apareça um erro semelhante a "XMLHttpRequest cannot load http://csf.aeb.gov.br/user. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access." instale a extensão pedida acima).

O projeto: 

O projeto consiste em um front-end utilizando o framework Angular 4, para um serviço REST localizado em "http://csf.aeb.gov.br/user" e faz as seguintes operações: - Listagem de todos os usuários, senhas e id's com método GET (csf.aeb.gov.br/user) - Criação de um novo usuário com método POST (csf.aeb.gov.br/user) - Listagem dos dados do usuário de ID (csf.aeb.gov.br/user/) - Atualização dos dados do usuário de ID (csf.aeb.gov.br/user/) - Remoção dos dados do usuário de ID (csf.aeb.gov.br/user/)

Maiores problemas: 

A priori o serviço rest pareceu inacessível pois até então acreditava que todo serviço rest respondia com .json como normalmente acontece com serviços como firebase, o que atrasou bastante o desenvolvimento, entretanto, consegui testar algumas funcionalidades com o PostMan. As funcionalidades são simples, portanto, não foram tão dificeis de implementar, entretanto, o formato da requisição foi o maior dos problemas, gastando cerca de 2 dias de estudo até encontrar a solução. A maioria dos serviços rest recebem ou um json, [object, object] ou uma string, (JSON.stringify(...)) ou até mesmo 'JSON' = JSON.stringify(...) entretanto foram varias e varias tentativas para inserir com POST, alterar com o PUT e todas retornavam (BAD REQUEST 400) o que significa que o formato enviado para o servidor rest está errado. Até que por um milagre da natureza encontrei a seguinte sugestão (data: 'username='+usuario.username+'&password='+usuario.password), além de usar o + para concatenar, utiliza o "=" após o nome dos campos, o que estava diferente do mostrado no code do PostMan, entretanto, funcionou o que fez com que todos os outros métodos fossem desenvolvido rapidamente.

Melhorias: 

As inclusões ainda não estão atualizando automaticamente o que me força em alguns momentos a ter que atualizar a página, utilizei algumas funções de sleep e refresh.location(), entretanto ambas não funcionaram, acredito que por se tratar de requisições http, porém pode ser melhorado. A parte visual ainda está bem amadora pois o problema do formato das inserções custou bastante tempo o que atrasou parte do projeto, entretanto, de forma continua será melhorada e implementada.
