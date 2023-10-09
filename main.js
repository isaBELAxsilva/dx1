function MaiorString(){
    var texto = document.querySelector("h1");
    var string1 = document.querySelector('#palavra1').value;
    var string2 = document.querySelector('#palavra2').value;

    if(string1.length > string2.length){
        texto.innerHTML = `O jogador A tem a maior palavra`
    }
    else if(string2.length > string1.length){
        texto.innerHTML = `O jogador B tem a maior palavra`
    }
    else if(string1.length == string2.length){
        texto.innerHTML = `Empate`
    }
}