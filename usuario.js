class Usuario{
    constructor(nome, email=null,senha){
        const Datas = require('./datas.js')
        this.datas = new Datas();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.assinatura = this.datas.dataAtual();
    }

    fazerLogin(email, senha){
        if (this.email == email && this.senha == senha){
            return "login efetuado com sucesso"
        }
        else{
            return "Erro ao efetuar login, email ou senha inválidos";
        }
    }

    retornaAssinatura(){
        return this.datas.formataData(this.assinatura);
    }
    validarAssinatura(){
        var dias = this.datas.diferencaDias(this.assinatura);
        return (dias >= 1)
    }

    adicionarAssinatura(dias){
        this.assinatura = this.datas.adicionarDias(this.assinatura,dias)
    }
}
module.exports = Usuario;