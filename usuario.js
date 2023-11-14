
import Datas from './datas.js';

export default class Usuario{
    #senha
    #assinatura
    constructor(nome,email,senha){        
        this.datas = new Datas();

        this.nome = nome;
        this.email = email;
        this.#senha = senha;
        this.#assinatura = this.datas.dataAtual();
    }

    get senha(){
        return this.#senha;
    }

    set senha(senha){
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if ((senha.length >= 6) && senha.match(passw)){
            this.#senha = senha;
        }
        else{
            throw new Error('Senha invalida')
        }
        
    }


    fazerLogin(email, senha){
        if (this.email == email && this.#senha == senha){
            return "Login efetuado com sucesso"
        }
        else{
            return "Falha ao efetuar login"
        }
    }

    get assinatura(){
        return this.datas.formataData(this.#assinatura)
    }

    validarAssinatura(){
        dias = this.datas.diferencaDias(this.#assinatura)
        return (dias >= 1)
    }

    set assinatura(dias){
        this.assinatura = this.datas.adicionarDias(this.#assinatura,dias)
    }
}