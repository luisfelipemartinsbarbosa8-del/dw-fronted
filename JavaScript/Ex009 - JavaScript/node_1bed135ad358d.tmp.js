var idade = 12

//Menores de 16 anos não votam
//Entre 16 e 18 anos o voto é opcional
//Maiores de 18 anos o voto é obrigatório
//Acima de 70 anos o voto é opcional

if (idade < 16) {
    console.log('Não vota')
} else if (idade <= 18) {
    console.log('Voto obrigatório')
} else if (idade <= 70) {
    console.log('Voto opcional')
} else {
    console.log('Voto opcional')
}
