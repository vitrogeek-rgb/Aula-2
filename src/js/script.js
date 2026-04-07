// // // OPERADORES ARITIMÉTICOS

// // const valor1=20;
// // const valor2=10;

// // console.log(valor1 + valor2);
// // console.log(valor1 - valor2);
// // console.log(valor1 / valor2);
// // console.log(valor1 * valor2);

// // // OPERADORES LÓGICOS

// // console.log(valor1 < valor2);
// // console.log(valor1 < 10 && valor2 != 20);
// // console.log(valor1 < 5 || valor1 > 50);

// // // OPERADORES DE COMPARAÇÃO

// // console.log(valor1 < valor2);
// // console.log(valor1 >= valor2);
// // console.log(valor1 <= valor2);
// // console.log(valor1 != valor2);
// // console.log(valor1 == valor2); //comparação
// // console.log(valor1 === valor2); // comparação e verificação de tipo
// // console.log("O valor é", valor1);

// //EXERCICIO 1
// const p= 200;
// const v= 20;
// const precoFinal= p - v;
// console.log("Valor com desconto:", precoFinal)


// //EXERCICIO 2
// const login= 1
// const token= 11
// const transacaoAutorizada = login === 1 && token >= 10;

// console.log("Transação autorizada com sucesso",transacaoAutorizada)

// //ESTRUTURA CONDICIONAL
// //if
// if(true){
//     console.log("É verdadeiro")
// }
// //if/else
// let nome ="Fiap"
// if(nome == "Fiap"){
//     console.log("Nome verdadeiro")
// }else{
//     console.log("Nome errado")
// }
// //if encadeado ou aninhado

// let idade=61;
// if(idade <= 13){
//     console.log("É uma criança")
// }else if(idade>13 && idade <=18){
//     console.log("É um adolescente")
// }else if(idade > 18 && idade < 60){
//     console.log("É um adulto")
// }else{
//     console.log("É um idoso")
// }

// //SWITCH CASE
// let times="santos";

// switch(times){
//     case "santos":
//         console.log("Um time idoso")
//         break;
//     case "são paulo":
//         console.log("Time panetone")
//         break;
//     case "palmeiras":
//         console.log("SEM MUNDIAL")
//         break;
//     case "corinthians":
//         console.log("Um time de tradição")
//         break;
//     default:
//         console.log("É tão ruim quanto a seleção brasileira")
// }

// //ternaria

// let salario=100;
// let resultado = salario == 100 ? "Salário certo":"Salário errado"
// console.log(resultado)

// let usuario="Fiap";
// let userLogado= usuario === "Fiap"?"Logado com sucesso":"Usuário inválido"
// console.log(userLogado)

// function verificarParImpar(numero){
//     return numero % 2 === 0 ? "PAR":"IMPAR";
// }
// console.log(verificarParImpar(35))

// ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

// for - Estrutura de repetição mais utilizada quando sabemos previamente quantas vezes o 
// código vai ser executado 

// DECLARAÇÃO, OPERAÇÃO E INCREMNTO
// for(let i=4; i<=5; i++){
//     console.log("Número: ",i);
// }
// // for para array

// const linguagens = ["Java", "Pyrhon", "C#", "PHP"];

// for(let i=0; i< linguagens.length;i++){
//     console.log("Linguagem",i ,":", linguagens[i]);
// }

// const tecnologias = ["JS", "HTML", "CSS"]

// for(const tech of tecnologias){
//     console.log("Estudando", tech)
// }
// const carros = {marca:"Volks", modelo:"Fusca", ano:1980};
// for(let dados in carros){
//     console.log(dados, ":", carros[dados]);
// }

// // while - Diferente do for, no while não sabemos a quantidade de vezes que o sódigo vai executar
// let i=1;

// while(i<=8){
//     console.log("contagem", i);
//     i++;
// }
// // Declaração indefinida
// let numero;

// while(numero !== "0"){
//     numero = prompt("Digite um número( ou 0 para sair)");
//     console.log("Eu sei o que você digitou", numero);
//     numero++;
// }
// console.log("Fim do Programa")

//  do while (Executa ao menos uma vez)
// let contador =10;
// do {
//     console.log("Vai executar pelo menos uma vez");
//     contador ++;
// }while(contador <=5);

// Declaração da variável undefined

// Gerar um número alatório entre 1 e 10

let palpite; 
const sorteio = Math.floor(Math.random() * 10);
do{
    palpite = parseInt(prompt("Digite um número entre 1 e 10")+1);

    if(isNaN(palpite)){
        alert("Saindo do jogo")
        break;
    }
    if(palpite !== sorteio){
        alert("Você perdeu R$100,00")
    }
} while(palpite !== sorteio)
    if(palpite === sorteio){
        alert("Parabéns, você acertou e ganhou R$100,00")
    }
