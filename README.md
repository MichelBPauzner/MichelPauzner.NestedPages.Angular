# MichelPauzner.NestedPages.Angular
Projeto em angular que demonstra o uso de "nestedpages", através do routing-module.

# Objetivo
Utilizar o roteamento de páginas do Angular para definir quais componentes devem ser exibidos, de acordo com o path requisitado, sem a utilização de ngIf ou outras diretivas;

# Features
## Componentes
1. Frame-Page: Representação de um componente que possui alguns menus. Como se fosse o layout padrão a ser exibido em todas páginas, com exceção do login, onde o usuário não possui acesso ainda. 
2. Frameless-Page: Representação de um componente que não possui nenhum menu, sendo exibido somente na página de login;
3. HomePage: Representação de um componente referente à página Home e que possui os menus da Frame-Page;
4. LoginPage: Representação de um componente referente à página Login e que não possui os menus da Frame-Page, ou seja, utilizando o componente Frameless-Page;

## Roteamento
app-routing.module.ts: Possui as configurações das páginas/componentes para o correto roteamento. 

