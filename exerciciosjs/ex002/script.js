let valor1 = document.querySelector("#valor1");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function somaSaldo(){

    let vlr1 = Number(valor1.value);
    let resultado = vlr1 * 1.01;
    h3Resultado.textContent = String(resultado);
}

btCalcular.onclick = function(){
    somaSaldo();
}