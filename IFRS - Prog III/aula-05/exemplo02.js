function adicionar() {

    let pai = document.querySelector('.pai')

    let novoNome = document.getElementById('nome')

    let novoFIlho = document.createElement('div')
    novoFIlho.classList.add('filho')
    novoFIlho.append( document.createTextNode(novoNome.value) )
    pai.append(novoFIlho)
    
    novoNome.value = ''
    console.log("Teste")
}