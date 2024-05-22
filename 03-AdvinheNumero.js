let numOne = Math.round(Math.random() * 10);
let numUser = prompt("Advinhe o número que estou pensnado? Está entre 0 e 10");
numUser = Number(numUser);

let i = 1;
while(numOne != numUser){
  numUser = prompt("Erro! Tente novamente:");
  i++;
}

alert(`Parabéns!! Você advinhou o número ${numUser} em ${i} tentativas`);