# Gerenciador de Favoritos

Este projeto é uma aplicação simples em React que permite aos usuários gerenciar uma lista de sites ou blogs favoritos. A aplicação possibilita adicionar, editar e remover itens da lista de favoritos, oferecendo uma interface intuitiva e fácil de usar.

## Instruções de Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências.
4. Inicie a aplicação.

## Instruções de Uso

Após iniciar a aplicação, a página principal exibirá uma lista de sites ou blogs favoritos. Você pode:

- Adicionar um novo favorito digitando no campo de entrada e clicando no botão "Adicionar".
- Editar um favorito existente clicando no botão "Editar" ao lado do item correspondente, fazendo as alterações desejadas e clicando em "Salvar".
- Remover um favorito clicando no botão "Remover" ao lado do item correspondente.

## Descrição dos Componentes

**App.js:** O componente principal da aplicação. Ele é responsável por renderizar o componente `FavoritesList` dentro de uma div container. Este componente serve como ponto de entrada da aplicação, organizando e estruturando os demais componentes.

**FavoriteItem:** Um componente funcional que representa um item individual na lista de favoritos. Ele pode estar em modo de visualização ou edição. No modo de visualização, exibe o texto do favorito junto com botões para editar ou remover o item. No modo de edição, exibe um campo de entrada para o usuário alterar o valor do favorito e um botão para salvar as alterações. Este componente recebe várias props para gerenciar suas funcionalidades, como o índice do item, o texto do favorito, e funções para editar, salvar e deletar o item.

**FavoritesList:** Um componente que gerencia o estado da lista de favoritos. Ele é responsável por adicionar novos itens à lista, editar favoritos existentes e remover favoritos. Mantém o estado dos favoritos, o valor do novo favorito, o índice do favorito que está sendo editado e o valor editado. O `FavoritesList` renderiza uma lista de `FavoriteItem`, passando as propriedades necessárias para que cada `FavoriteItem` possa funcionar corretamente.

**App.css:** Contém a estilização básica utilizada na aplicação. Define estilos para a aparência dos componentes, incluindo o layout da lista de favoritos, botões e campos de entrada.

## Este projeto utiliza React para a criação de componentes e gerenciamento de estado, e CSS para estilização. A estrutura do projeto é simples e modular, facilitando a manutenção e a adição de novas funcionalidades.