import Usuario from './Usuario.js';
import FuncoesES from './EntradaSaida.js';
import filme from './filme.js';
import { Serie } from './serie.js';
import genero from './genero.js';


const usuario1 = new Usuario("Roberval","roberval@bol.com","senhadificil123")

const ES = new FuncoesES();

var login = ES.entrada('Digite o usuário: ')

var senha = ES.entrada('Digite a senha: ')


console.log(usuario1.senha)


usuario1.senha = 'TestandoASenhaCorreta@123'
console.log(usuario1.senha)

ES.mensagemCompleta(usuario1.fazerLogin(login,senha));
ES.mensagemCompleta(usuario1.assinatura);

const generoTerror = new genero("TERROR")
const generoSuspense = new genero("SUSPENSE")

const filme1 = new filme("Barbieheimer",120," Um filme onde uma boneca constroi uma bomba nuclear",2024,generoTerror)
const filme2 = new filme("Jogos mortais",120," Um homem prende pessoas que jogam um jogo que vale sua vida",2024,[generoTerror,generoSuspense])

const filme3 = new filme("Jogos mortais",120," Um homem prende pessoas que jogam um jogo que vale sua vida",2024,[generoTerror,generoSuspense])

const filme4 = new filme("Jogos morasdsasadfsadsadgtais",120," Um homem prenfasdfsadf sadgasg sde pessoas que jogam um jogo que vale sua vida",2024,[generoTerror,generoSuspense])



ES.mensagemCompleta(filme2.genero.nome);
ES.mensagemCompleta(filme1.compartilhar());

const serie1e1 = new Serie("O amanhecer de uma aventura","One piece a serie",64,"Preso em um barco afundado, luffy começa a jornada( que nunca acaba) ",2023,1,1)
const serie1e2 = new Serie("Blablabla","One piece a serie",64,"Blablabla",2023,2,1)
ES.mensagemCompleta(serie1e1.assistir());
ES.mensagemCompleta(serie1e1.compartilhar());
ES.mensagemCompleta(serie1e2.assistir());