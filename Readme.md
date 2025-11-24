# Catálogo de RPGs - Imersão Alura Dev

Bem-vindo ao Catálogo de RPGs! Este projeto foi desenvolvido como parte da Imersão Dev da Alura e consiste em uma coleção de dados sobre diversos sistemas de Role-Playing Game (RPG) em formato JSON.

O objetivo é criar uma fonte de dados estruturada que possa ser utilizada para estudos, desenvolvimento de aplicações, ou simplesmente para entusiastas que desejam explorar e descobrir novos sistemas de RPG.

## 🎲 Sobre o Projeto

Este repositório contém o arquivo `data.json`, que é uma lista curada de sistemas de RPG, abrangendo desde clássicos de fantasia até jogos de horror e ficção científica mais modernos. Cada entrada fornece informações detalhadas sobre um sistema específico.

## 📄 Estrutura dos Dados

Cada sistema de RPG no arquivo `data.json` é representado por um objeto com a seguinte estrutura:

```json
{
  "nome": "Nome do Sistema",
  "data_criacao": "Ano de criação do sistema",
  "criador": [
    "Nome do criador ou da editora"
  ],
  "descricao": "Uma breve descrição sobre o sistema, suas mecânicas e cenário.",
  "link": "Link para o site oficial ou página de referência.",
  "imagem_capa": "Caminho relativo para a imagem da capa do livro.",
  "tags": [
    "Gênero",
    "Mecânica",
    "Tema"
  ]
}
```

- **`nome`**: O nome oficial do sistema de RPG.
- **`data_criacao`**: O ano em que o sistema foi originalmente lançado.
- **`criador`**: Um array contendo o(s) nome(s) do(s) criador(es) ou da editora principal.
- **`descricao`**: Um parágrafo que resume o jogo, seu cenário e suas principais características.
- **`link`**: Um URL para o site oficial, onde é possível encontrar mais informações ou adquirir o jogo.
- **`imagem_capa`**: O caminho para a imagem da capa do livro básico, localizada na pasta `assets/capas`.
- **`tags`**: Uma lista de palavras-chave que ajudam a categorizar o sistema por gênero, mecânica ou estilo.

## 🚀 Como Utilizar

Você pode utilizar o arquivo `data.json` de várias formas:

1.  **Para Estudo**: Analisar a estrutura dos dados para aprender sobre JSON.
2.  **Para Desenvolvimento**: Usar como uma "API" local para seus projetos, como um site que exibe os RPGs, um bot de Discord que recomenda jogos, etc.
3.  **Para Consulta**: Simplesmente navegar pelo arquivo para descobrir novos RPGs para sua próxima campanha!

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você quiser adicionar um novo sistema de RPG, corrigir alguma informação ou melhorar uma descrição, siga os passos abaixo:

1.  **Faça um Fork** deste repositório.
2.  **Crie uma Branch** para sua modificação (`git checkout -b feature/adicionar-novo-rpg`).
3.  **Adicione seus Dados**: Insira o novo sistema no arquivo `data.json`, mantendo a estrutura existente. Se adicionar uma imagem, coloque-a na pasta `assets/capas/`.
4.  **Faça o Commit** de suas mudanças (`git commit -m 'Adiciona o sistema X'`).
5.  **Faça o Push** para a sua branch (`git push origin feature/adicionar-novo-rpg`).
6.  **Abra um Pull Request**.

---

*Projeto criado durante a Imersão Dev da Alura.*