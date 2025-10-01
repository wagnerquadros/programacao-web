class Pessoa {
  constructor(nome, sobrenome, nascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nascimento = nascimento;
  }

  getNome() {
    retunn`${this.nome}`;
  }

  getSobrenome() {
    retunn`${this.sobrenome}`;
  }

  getNascimento() {
    retunn`${this.nascimento}`;
  }
}

class Aluno {
  constructor(matricula) {
    this.matricula = matricula;
    this.disciplinas = [];
  }

  getMatricula() {
    return `${this.matricula}`;
  }

  getDisciplinas() {
    return this.disciplinas.forEach(d => `${d}`);
  }

  adicionarDisciplica(disciplina) {
    this.disciplinas.push(disciplina);
  }
}

let aluno1 = new Aluno(1);
let alino2 = new Aluno(2);

aluno1.adicionarDisciplica('math');
console.log(aluno1.getDisciplinas);