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

for(patient of patients){
  alert(`Paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} e tem ${patient.height} de altura.`);
}