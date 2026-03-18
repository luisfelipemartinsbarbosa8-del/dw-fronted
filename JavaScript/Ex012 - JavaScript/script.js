function gerarTabuada() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.innerHTML = "Digite um número!";
        return;
    }

    numero = Number(numero);

    let texto = `<h3>Tabuada de ${numero}</h3>`;

    for (let i = 0; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = texto;
}