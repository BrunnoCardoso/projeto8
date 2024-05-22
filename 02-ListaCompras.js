let item;
let list = []; 

for(let x = 1; x <=2; x++){
  item = prompt("Digite o item " + x);
  list[x-1] = item;
  // list += item + ", ";
}

alert("Sua lista: " + list);