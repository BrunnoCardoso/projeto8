let option;
let list = [];

while(option != 3){
  
  option = Number(prompt("Olá usuário! Digite o número da opção desejada:\n1. Cadastrar um item na lista.\n2. Mostrar itens cadastrados\n3. Sair do programa,"));

  switch (option){
    case 1:
      list.push(prompt("Digite o item na lista:"));
      break;
    case 2:
      if(list.length > 0){
        alert("Sua lista: " + list);
      }else{
        alert("Não existem itens cadastrados");
      }
      break;
  
    case 3:
      alert("Fim da aplicação!");
      break;
  
    default:
      alert("Opção inválida");
      break;
  }
}