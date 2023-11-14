const Usuario = require('./usuario.js')
const EntradaSaida = require('./EntradaSaida.js')
const ES = new EntradaSaida();

const usuario = new Usuario('Roberval','roberval@hotmail.com','senhadificil123');

var email = ES.entrada('Digite o email')
var senha = ES.entrada('Digite a senha')

ES.mensagemCompleta(usuario.fazerLogin(email,senha))

ES.mensagemCompleta(usuario.retornaAssinatura())

usuario.adicionarAssinatura(60)

ES.mensagemCompleta(usuario.retornaAssinatura())