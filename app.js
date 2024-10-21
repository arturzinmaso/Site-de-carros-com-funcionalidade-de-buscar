function pesquisar(){
   

    // vai ir no documento html e vai buscar o elemento pelo Id dele 
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena-o na variável section.
    // Esse elemento será usado para exibir os resultados da pesquisa.
let section = document.getElementById("resultados-pesquisa")


// camelCase, a segunda palavra sempre tem a primeira letra minúscula, SE EU quiser algo do HTML eu escrevo DOCUMENT
let lugarPesquisa = document.getElementById("lugar-pesquisa").value

if (!lugarPesquisa) {
    section.innerHTML = "<p>Nenhuma informação foi encontrada. Você não buscou por um carro.</p>"
    return
}

    lugarPesquisa = lugarPesquisa.toLowerCase()

// inicia uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descrisao = "";
let tags = "";

//(para cada dado dentro da lista de dados) obs:coloca em chaves para cada item que agnt quer que seja executado para cada dado dentro da lista de dados
for (let dado of dados) { 
    titulo = dado.titulo.toLowerCase()
    descrisao = dado.descrisao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se título includes o lugarPesquisa, vai dar true no console
    if(titulo.includes(lugarPesquisa) || descrisao.includes(lugarPesquisa) || tags.includes(lugarPesquisa) ) {
    //se o título incluir na pesquisa, o computador vai puxar toda a div ("item-resultado")

    // Cria uma string de HTML formatada para cada item de resultado.
    // As variáveis dentro das chaves `${}` são substituídas pelos valores correspondentes de cada dado.
    // colocando o html no javascript
    resultados  += `                      
    <div class="item-resultado"> 
        <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descrisao}</p>
            <a href=${dado.link} target="_blank"> Clique aqui para mais informações.</a>
    </div>
`
    }  
  }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


// Atribui a string completa de resultados ao conteúdo HTML do elemento section.
// Isso substitui o conteúdo anterior do elemento com os novos resultados da pesquisa.
section.innerHTML = resultados

}

//console.log(dados); 
// a palavra "ou" no JS é falado por duas barras ||
//Toda vez que abrir parenteses é uma função 

// usa "=" quando for atribuir um valor para uma variavel, quando for comparar tem que usar duas "=="

// No "FOR" é onde de fato temos informações do objeto

// lowerCase é para o usuario do site escrever da forma que preferir(maiusculo ou minusculo ) e o computador conseguir entender e puxar a informação 


// o ! é usado para verificar se uma condição não é verdadeira