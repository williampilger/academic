let t1 = document.getElementById('titulo')
t1.innerHTML = 'Tintulun!'

// Note que o comando abaixo retorna um Node, enquanto que o acima retorna um HTMLEllement
// Um deles é estático e outro é dinâmico
let p2 = document.querySelector('.parag')
p2.classList.add('coloridinho')