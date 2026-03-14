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

/*As condições são: se o aluno tem uma nova maior que 7 ele está aprovado, se a nota estiver entre 6 e 7 ele está de recuperação, caso a nota seja menor que 6 ele está reprovado */

if (media >= 7) {
    console.log('O aluno está aprovado!.');
} else if (media < 6) {
    console.log('O aluno está reprovado!.');
} else {
    console.log('O aluno está de recuperação!.');
}

