Testes End to End - Ebac Shop

Clonando e executando em sua máquina

Pré-requisito:
-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:

git clone https://github.com/felipemsilva2/teste-ebac-ui-v2

cd testes-e2e-ebac-shop

Para instalar as dependencias:

npm install 

Para executar em moodo Headlesss via console:

npx cypress run

Para executar via Dashboard:

npx cypress open 

Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

Bibliotecas de apoio:

-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker
