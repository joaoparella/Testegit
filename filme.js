export default class filme{
    constructor(nome,duracao,sinopse,ano,genero){                
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
    }

    compartilhar(){
        return "Estou assistindo o filme "+this.nome+ " que conta a seguinte história: "+this.sinopse+ 
        ", foi lançado em "+this.ano+" e tem duração de "+this.duracao+
        " minutos. Assista também!!";
    }

    assistir(){
        return "Assistindo filme "+this.nome+" - Tempo restante -> "+this.duracao +" minutos."
    }
}