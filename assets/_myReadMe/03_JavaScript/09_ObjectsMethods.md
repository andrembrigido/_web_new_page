<NewMethods01>
var aluno - {
    nome: "Andre";
    notas: [7, 8];
    media: functiob (n1, n2) {
        return ( n1, n2) / 2;
    }
}
console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], alunos.notas[1]))

<NewMethods02>
var calcMedia = function (n1,n2) {
    return (n1 + n2) / 2;
}
var aluno = {
    nome: "Andre",
    notas: [7, 8],
    media: calcMedia
}
console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

<NewMethods03>
function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}
var aluno = {
    nome: "Andre",
    notas: [7, 8],
    media: calcMedia
}
console.log(aluno.nome)
console.lo(aluno.media());
