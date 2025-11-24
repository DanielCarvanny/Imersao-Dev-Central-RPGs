// Seleciona o contêiner onde os cards serão inseridos
let cardContainer = document.querySelector(".card-container");
// Seleciona o campo de busca
let inputBusca = document.getElementById("input-busca");

//Criação de uma lista vazia para armazenar os dados
let dados = [];

//Função para carregar os dados do arquivo JSON
async function iniciarBusca(){
    // Se os dados ainda não foram carregados, busca no JSON
    if (dados.length === 0) {
        let resposta = await fetch('data.json'); // Traz a resposta do arquivo
        dados = await resposta.json(); // Converte a resposta em JSON e armazena na variável dados
    }

    // Pega o termo de busca do input, em minúsculas para busca case-insensitive
    const termoBusca = inputBusca.value.trim().toLowerCase();

    // Filtra os dados com base no termo de busca
    const dadosFiltrados = termoBusca === "" ? dados: dados.filter(item => {
            const nome = item.nome.toLowerCase();
            const descricao = item.descricao.toLowerCase();
            // Retorna true se o nome ou a descrição incluírem o termo de busca
            return nome.includes(termoBusca) || descricao.includes(termoBusca);
        });

    renderizarCards(dadosFiltrados); // Chama a função para renderizar os cards com os dados filtrados
}

//Função para renderizar os cards na página
function renderizarCards(dados){
    cardContainer.innerHTML = ""; // Limpa o contêiner antes de renderizar novos cards
    try{
        // Verifica se a lista de dados filtrados está vazia
        if (!dados || dados.length === 0) {
            // Se estiver vazia, exibe uma mensagem de "nenhum resultado"
            cardContainer.innerHTML = '<p class="mensagem-busca">Nenhum RPG encontrado com esse termo.</p>';
            return;
        } 
            // Se houver resultados, renderiza os cards
            dados.forEach(item => {
                cardContainer.innerHTML += `
                <article class="card">
                    <img class="capa" src="${item.imagem_capa || 'assets/capas/placeholder.jpg'}" alt="Capa de ${item.nome}">
                    <div class="conteudo">
                        <h2>${item.nome}</h2>
                        <p><strong>Ano:</strong> ${item.data_criacao}</p>
                        <p>${item.descricao}</p>
                        <p><strong>Gênero:</strong> ${item.tags}</p>
                        <a href="${item.link}" target="_blank" rel="noopener">Site Oficial</a>
                    </div>
                </article>`;
            });
        
    } catch (error) {
        console.error('Erro ao renderizar os cards', error);
    }
}
// Eventos: carregar tudo ao abrir a página e filtrar enquanto digita
window.addEventListener('load', iniciarBusca);
inputBusca.addEventListener('input', iniciarBusca);