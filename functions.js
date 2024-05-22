let patients = [
  {
    name: "Brunno",
    age: 41,
    weight: 90,
    height: 172
  },
  {
    name: "Letícia",
    age: 34,
    weight: 70,
    height: 159
  },
  {
    name: "Eduarda",
    age: 7,
    weight: 30,
    height: 110
  }
]

function printPatientIMC(patient){
  let heightFormat = patient.height / 100;
  let IMC = patient.weight / (heightFormat ** 2);
  IMC = IMC.toFixed(2);

  alert(`Paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}, tem ${heightFormat} de altura e o IMC de ${IMC}`);
}

for(patient of patients){
  printPatientIMC(patient);
}