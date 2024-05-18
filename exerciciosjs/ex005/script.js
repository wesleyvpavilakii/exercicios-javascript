function maior(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var maior = n1;

    if(n2 > maior)
        maior = n2;

    alert("Maior: " + maior);

}