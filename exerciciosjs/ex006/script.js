function menor(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);

    var menor = n1;

    if(n2 < menor)
        menor = n2;
    if(n3 < menor)
        maior = n3;

    if(n4 < menor)
        menor = n4;

    alert("Menor: " + menor);

}