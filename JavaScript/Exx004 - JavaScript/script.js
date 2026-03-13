function somar() {
   var num1 = Number(document.getElementById('num1').value)
   var num2 = Number(document.getElementById('num2').value)
   console.log(`O valor do num1 é ${num1}.O valor do num 2 é ${num2}.`);

var soma= num1 + num2

var resultado = document.getElementById('resultado')

resultado.innerHTML = `A soma dos dois números é <strong style="color: red;">${soma} </strong>.`

/* console.log(`O valor do num1 é ${num1}.O valor do num 2 é ${num2}.A soma dos dois números é ${soma}.`) */

resultado.style.outline = '2px solid red'

}
   

