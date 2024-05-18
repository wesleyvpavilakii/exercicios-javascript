var EntradaDadosUm = document.querySelector("#entradaDadosUm");
var entradaDadosDois = document.querySelector("#entradaDadosDois");
var Botao = document.querySelector("#somar");
var Result = document.querySelector("#resultado");

function SomaFinal(){
    var valor1 = parseInt(entradaDadosUm.value)
    var valor2 = parseInt(entradaDadosDois.value)
    var soma = valor1 + valor2;
    document.querySelector("#resultado").value = soma;
}

Botao.addEventListener('click', function(){
    SomaFinal();
});