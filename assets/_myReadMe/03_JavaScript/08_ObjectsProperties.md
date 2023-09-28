<newPropriedad01>
var aluno = { 
    nome: "Andre",
    notas: [7.5, 3.0]
}
aluno.matricula = 1234;
console.log(aluno);

<newPropriedad02>
var aluno = { 
    nome: "Andre",
    notas: [7.5, 3.0]
}
aluno["matricula"] = "1234";
console.log(aluno);

<newPropriedad03>
var aluno = { 
    nome: "Andre",
    notas: [7.5, 3.0]
}
var novaPropriedade = "Matricula";
aluno[novaPropriedade] = "1234";
console.log(aluno);