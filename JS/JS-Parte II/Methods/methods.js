
let Aluno = {
    nome: "Gabriel",
    idade: 24,
    matricula: "201802679",
    responderChamada(){
        window.alert(
            "Estou aqui! Meu nome é " + this.nome + "\n" +
            "Eu tenho " + this.idade + " anos\n" +
            "Minha matrícula é: " + this.matricula
        )
    }
}

Aluno.responderChamada()