// Q1
// var peso = 60;
// var altura = 170;
// var imc = peso / Math.pow(altura/100,2);
// console.log("O IMC é: " + imc.toFixed(2));
// Q2 
// fórmula 𝐴 = 𝜋𝑟
// var raio = 20;
// var circunferencia = 2*Math.PI*raio;
// console.log("O raio é: " + circunferencia);
// Q3
// var raio = 20
// var volume = (4/3)*Math.PI*Math.pow(raio,3);
// console.log("O volume da esfera é: " + volume);
//Q4
// var frase = "A tartaruga é um animal marinho.";
// var novaFrase = frase.replace(/a/g, 'e');
// console.log(novaFrase);
//Q5
// Função que verifica se o nome começa com a letra "A"

// var nome = "vante";
//   if (nome.charAt(0) === 'a') {
//     console.log("O nome começa com a letra 'a'.");
//   } else {
//     console.log("O nome não começa com a letra 'a'.");
//   }
var palavra = prompt("Digite uma palavra:");
var palavraInvertida = palavra.split('').reverse().join('');

if (palavra === palavraInvertida) {
  console.log("A palavra é um palíndromo.");
} else {
  console.log("A palavra não é um palíndromo.");
}



  



