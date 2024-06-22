<div align="center">
    <h1>Dia 3</h1>
</div>

<p align="center">
  <a href="#jsx---javascript--xml">JSX - (Javascript + XML)</a> •
  <a href="#componentes-aninhados">Componentes Aninhados</a> •
  <a href="#default-exports-vs-named-exports">Default Exports vs Named Exports</a><br>
  <a href="#properties-ou-props">Properties ou Props</a> •
  <a href="#css-modules">CSS Modules</a><br>
</p>

## JSX - (Javascript + XML)
<ul>É a linguagem que utilizamos para escrever nossos componentes. Ou quando usamos Typescript ao invés de JS, chamamos de .tsx, ainda seguindo a mesma lógixa de que parece uma mistura com XML. E aí, mas o que é XML? Ninguém pediu mas tá aqui a diferença:</ul>
<ul><b>- Propósito:</b>
        
    XML: É usado para armazenar e transportar dados. Ele não define como os dados devem ser exibidos, mas sim como devem ser estruturados.

    HTML: É usado para criar páginas web e definir a estrutura e apresentação do conteúdo na web.
</ul>

<ul><b>- Flexibilidade:</b>

    XML: Permite criar tags personalizadas, o que o torna altamente flexível para representar qualquer tipo de dados.
    
    HTML: Tem um conjunto fixo de tags predefinidas para representar elementos comuns de uma página web, como títulos, parágrafos, links e imagens.
</ul>
<ul>Em resumo, XML é para dados, enquanto HTML é para a apresentação de dados na web.</ul>
    
---

## Componentes Aninhados
<ul>No React não podemos retornar vários componentes repetidos ou idependentes, um abaixo do outro sem que estejam envoltos por outro elemento, como uma div, por exemplo. Ocorrerá um erro na renderização caso não aninhemos esses componentes.</ul>

---

## Default Exports vs Named Exports
<ul>Basicamente, no Named Exports você é obrigado a utilizar o mesmo nome dado a função na hora em que exportou quando for importá-la. Ou seja, desta forma evita-se que após alguma alteração no nome do componente ou da função você esqueça de manter a conformidade/padronização e legibilidade do código. Abaixo exemplos de exports em ambos os padrões.</ul>
<ul><b>- Default Exports:</b>
    
        function Post() {
            return ("...")
        }
        export default Post
 ---   
        import Post from './Post';
        function App() {
            return (
                <div>
                    <Post />
                    <Post />
                </div>
            )
        }
        export default App
   
</ul>

<ul><b>- Named Exports:</b>
    
        export function Post() {
            return ("...")
        }
 ---   
        import {Post} from './Post';
        export function App() {
            return (
                <div>
                    <Post />
                    <Post />
                </div>
            )
        }
</ul>

---

## Properties ou Props
<ul>São argumentos passados para componentes para transmitir dados. Elas permitem que os componentes sejam reutilizáveis e personalizáveis, funcionando como parâmetros de uma função.</ul>
<ul>Ou seja, podemos reaproveitar a estilização e funcionalidades daquele componente, mas injetando/exibindo um conteúdo (texto, valores, imagens, etc.) personalizado para cada um.</ul>

---

<b>Importações de estilos no React</b>
<ul>Diferentemente de uma construção de página usual, no React, as importações de estilo são realizadas diretamente nos arquivos .jsx da aplicação. E o import não ncessita de mencionar o nome do arquivo, mas apenas o caminho até ele, como no exemplo abaixo.

    import './styles.css';
</ul>

---

## CSS Modules
<ul>São arquivos CSS cujo escopo é limitado ao componente que os importa, evitando conflitos de nomes de classes e estilos globais.</ul>

<b>👀 read later </b><br>

[CSS Models](https://github.com/css-modules/css-modules) <br>
[Vite + CSS Models](https://vitejs.dev/guide/features#css-modules) <br>
[Default Color Palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) <br>

<br>
<img src="./../.github/assets/gradient-bar.svg" width="100%" height="8px"/>
<p align="center">Grow like a 🌳!</p>
