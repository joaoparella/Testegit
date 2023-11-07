const prompt = require('prompt-sync')();

function OrdenaVetor(vetVetor, blCrescente){
    var aux = 0;
    var troca = 0;

    if(blCrescente){
        for(var i=0; i<vetVetor.length; i++){
            aux = i;
            for (var j=i+1; j< vetVetor.length; j = j + 1){
                if (vetVetor[j] < vetVetor[aux])
                    aux = j;
            }
            troca = vetVetor[aux];
            vetVetor[aux] = vetVetor[i];
            vetVetor[i] = troca;
        }
        
    }
    else{
        for(var i=0; i<vetVetor.length; i++){
            aux = i;
            for (var j=i+1; j< vetVetor.length; j = j + 1){
                if (vetVetor[j] > vetVetor[aux])
                    aux = j;
            }
            troca = vetVetor[aux];
            vetVetor[aux] = vetVetor[i];
            vetVetor[i] = troca;
        }
    }
    return vetVetor;
}

function entradaVetor(){   
    vect = [];
    while (typeof num != 0){
        var num = parseFloat(prompt("Digite um numero: "));
        if (num != 0)
            vect.push(num);
    }
    return vect;
}
var numeros = entradaVetor();
cresc = OrdenaVetor(numeros,true);
console.log(cresc)
desc = OrdenaVetor(numeros,false);
console.log(desc)

