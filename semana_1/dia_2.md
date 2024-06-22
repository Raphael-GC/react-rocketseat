<div align="center">
    <h1>Dia 2</h1>
</div>

<p align="center">
  <a href="#dom---document-object-model">DOM - (Document Object Model)</a> •
  <a href="#fluxo-de-renderização">Fluxo de Renderização</a>
</p>

## DOM - (Document Object Model)
<ul>A DOM não é responsável por organizar e renderizar os scripts JavaScript em si. Em vez disso, o navegador carrega e executa os scripts JavaScript que, por sua vez, podem manipular a DOM.</ul>

<ul>Os arquivos .js (JavaScript) são carregados e executados pelo navegador. O código JavaScript pode então acessar e modificar a DOM para alterar o conteúdo e o comportamento da página. </ul>

<ul>A DOM é uma árvore de elementos que representa a estrutura do HTML de uma página. Ela permite que scripts JavaScript interajam com e modifiquem o conteúdo e a estrutura da página HTML.</ul>

<ul>Portanto, a DOM é essencialmente a representação da estrutura HTML que pode ser manipulada usando JavaScript, mas não organiza ou renderiza diretamente os scripts JavaScript.</ul>
<br>

---

## Fluxo de Renderização
<ul>Complementando o que eu havia falado ontem sobre o fato de os navegadores até pouco tempo atrás não permitirem que um scipt invocasse outro, sendo necessário recorrer a ferramentas chamadas de Bundlers. Eu até então não havia entendido o porquê de haver apenas as metatags e um tal de root nos arquivos index.html e todo o conteúdo das SPAs está sendo escrito dentro de outro arquivo com um tipo esquisito (.jsx) que mais parece uma mistura de html com js. Mas agora tudo foi esclarecido na minha mente. </ul>

<ul>O que ocorre, é que a tag script aponta para o script principal, onde lá dentro desse script o ReactDOM, junto com o método .render(), está transformando/renderizando os componentes (javascript files) ali invocados de maneira identada, em html para que os navegadores possam interpretar. outo ponto passado na tag script do nosso index.html é o type: modules, ou seja, é através dos módulos ECMAScripts (utilizados pelo Vite) que os navegadores atuais conseguirão nativamente lidar com o padrão de importação e exportação dos scripts, conseguindo interpretálos sem a necessidade de um bundler.</ul>    

<br>
<img src="./../.github/assets/gradient-bar.svg" width="100%" height="8px"/>
<p align="center">Grow like a 🌳!</p>
