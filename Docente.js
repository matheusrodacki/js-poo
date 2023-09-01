import User from "./User.js";

export default class Docente extends User {
  #codMateria;
  constructor(
    nome,
    email,
    nascimento,
    codMateria,
    role = "docente",
    ativo = true
  ) {
    super(nome, email, nascimento, role, ativo);
    this.#codMateria = codMateria;
  }

  aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso ${curso}.`;
  }

  get codMateria() {
    return this.#codMateria;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.ativo}, ${this.codMateria} `;
  }
}
