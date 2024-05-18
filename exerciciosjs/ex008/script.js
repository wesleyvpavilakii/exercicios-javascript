function verificarProduto() {

    let codigo = document.getElementById("codigo").value;

    let resultado = document.getElementById("resultado");


    if (codigo === "001") {
        resultado.textContent = "Produto: Parafuso";
    } else if (codigo === "002") {
        resultado.textContent = "Produto: Porca";
    } else if (codigo === "003") {
        resultado.textContent = "Produto: Prego";
    } else {
        resultado.textContent = "Diversos";
    }
}