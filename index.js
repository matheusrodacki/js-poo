import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

//const novoUser = new User('Mariana', 'm@m.com', '2021-03-03')
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.nome, novoAdmin.email)
//novoAdmin.nome = ''
//console.log(novoAdmin.nome)

const novoDocente = new Docente('Rafael', 'rafael@escola.com', '2021-02-02','TDB-I')
console.log(novoDocente.exibirInfos(), novoDocente.codMateria)
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))