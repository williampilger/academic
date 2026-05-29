function adicionar() {

    let pai = document.querySelector('ul')

    let novoNome = document.getElementById('nome')

    let novoFIlho = document.createElement('li')
    novoFIlho.append( document.createTextNode(novoNome.value) )
    pai.append(novoFIlho)
    
    novoNome.value = ''
    novoNome.focus()
}