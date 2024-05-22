let name = prompt("Nome do aluno:");
let note1 = prompt("Primeira nota bimestre:");
let note2 = prompt("Segunda nota bimestre:");
let note3 = prompt("Terceira nota bimestre:");

note1 = Number(note1);
note2 = Number(note2);
note3 = Number(note3);

let average = (note1 + note2 + note3) / 3;
average = average.toFixed(2);

if(average >= 6){
  alert(name + " parabéns você passou com a média " + average)
}else{
  alert(name + " infeliemente você não passou com a média " + average)
}