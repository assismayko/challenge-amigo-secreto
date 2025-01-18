let amigos = [];
let numerosSorteados = [];
let tamanhoArray;

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    inputAmigo.value = '';
}

// Função para atualizar a exibição da lista de amigos
function atualizarListaDeAmigos() {
    let listaExibicao = document.getElementById('listaAmigos');
    listaExibicao.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaExibicao.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }
    let numeroSorteado = gerarNumeroAleatorio();
    exibirAmigoSorteado(numeroSorteado);
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
  
    tamanhoArray = amigos.length;
    let novoNumeroGerado;
    do{
      novoNumeroGerado = parseInt(Math.random() * tamanhoArray);
    }while(numerosSorteados.includes(novoNumeroGerado))
    
    numerosSorteados.push(novoNumeroGerado);
    return novoNumeroGerado;

}

// Função para exibir o amigo sorteado
function exibirAmigoSorteado(index) {
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = `<li>${amigos[index]}</li>`; 
}

