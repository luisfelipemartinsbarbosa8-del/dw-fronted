var nota1 = 8;
var nota2 = 7;

var media = (nota1 + nota2) / 2

console.log(`A nota do aluno é: ${media}`);

/*As condições são: se o aluno tem uma nova maior que 7 ele está aprovado, se a média for menor que 7 ele está reprovado */

if (media >= 7) {
    console.log('O aluno está aprovado.');
} else {
    console.log('O aluno está reprovado.');
}