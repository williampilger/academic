// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// let j = 0;
// do{
//     console.log(j);
//     j++;
// }while(j < 5);

// for(let k = 0; k < 5; k++){
//     console.log(k);
// }

function btnOnClick(){
    
    let carros = ["Gol", "Uno", "Palio", "Celta", "Corsa"];

    carros.pop();//remove o último elemento do array
    console.log(carros);

    carros.shift();//remove o primeiro elemento do array
    console.log(carros);

    carros.push("Onix");//adiciona um elemento no final do array
    console.log(carros);

    carros.unshift("Fiesta");//adiciona um elemento no início do array
    console.log(carros);

    //splice(posição, quantidade de elementos a remover, elemento1, elemento2, ...)
    carros.splice(2, 1, "Civic", "Corolla");//remove 1 elemento a partir da posição 2 e adiciona "Civic" e "Corolla" nessa posição
    console.log(carros);
    carros.splice(4);//remove todos os elementos a partir da posição 4
    console.log(carros);

    window.alert('O script executou! Abra o console para ver o resultado.');
}