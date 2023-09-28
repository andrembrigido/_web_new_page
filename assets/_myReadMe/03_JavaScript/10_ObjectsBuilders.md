<newBuilder01>

function criarAluno(name, n1, n2){
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: funcition(){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}
var turma = {
    criarAluno("Andre", 9.5, 10),
    criarAluno("Bruno", 2, 5),
    criarAluno("Joao", 5, 7),
}
var aluno = turma[2];

for (var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media())
}

<newBuilder02>

function aluno(name, n1, n2) {
    this.nome = name,
    this.nota1 = n1,
    this.nota2 = n2,
    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}

var nAluno = new aluno("Andre, 9, 10);
var nAluno = new aluno("Bruno" 0.5, 3);
console.log(nAluno);