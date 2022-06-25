function calculaImc() {
    // pegando os valores digitados pelo usuário
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // Cálculo do IMC -> peso dividido pela altura ao quadrado.
    let imc = peso / altura ** 2;
    
    document.getElementById("imc").innerHTML = "Seu indice de massa corporal: " + imc.toFixed(2).replace(".",",");

    if (imc < 18.50) {
        document.getElementById("resultado").innerHTML = "Magreza - Obesidade Grau 0 (zero)";
    } 
    else if (imc >= 18.50 && imc <= 24.99) {
        document.getElementById("resultado").innerHTML = "Normal - Obesidade Grau 0 (zero)";
    } 
    else if (imc >= 25.00 && imc <= 29.99) {
        document.getElementById("resultado").innerHTML = "Sobrepeso - Obesidade Grau I (um)";
    } 
    else if (imc >= 30.00 && imc <= 39.99) {
        document.getElementById("resultado").innerHTML = "Obesidade - Obesidade Grau II (dois)";
    } 
    else {
        document.getElementById("resultado").innerHTML = "Obesidade Grave - Obesidade Grau III (três)";
    }
    
    
}