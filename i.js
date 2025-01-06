// 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

// var letras = prompt("Digite uma letra");

// if (letras == 'a' || letras == 'e' || letras == 'i' || letras == 'o' || letras == 'u') {
//     console.log('A sua letra é vogal')
// } else {
//     console.log('A sua letra é consoante')
// }

// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;


//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.
// Calcular média de dois números

// let nota1 = 5

// let nota2 = 9

// let media = (nota1 + nota2) / 2

// console.log(media)

// if (media >= 7) {
//     console.log('aprovado media: ' + media)
// } else {
//     console.log('reprovado media: ' + media)
// }

// 3. Faça um script que leia três números inteiros e mostre o maior deles.

// var numero = [5, 5, 3]

// console.log(numero)

// if (numero[0] >= numero[1] && numero[0] >= numero[2]) {
//     console.log('O maior numero é o '+ numero[0])
// } else if (numero[1] >= numero[0] && numero[1] >= numero[2] ) {
//     console.log('O maior numero é o '+ numero[1])
// } else {
//     console.log('O maior numero é o '+ numero[2])

// }

// function maior(){
//     var num1 = parseFloat(document.getElementById("numero1").value);
//     var num2 = parseFloat(document.getElementById("numero2").value);
//     var num3 = parseFloat(document.getElementById("numero3").value);

//     var maior = num1;

//     if(num2 > maior)
//      maior = num2;
//     if(num3 > maior)
//      maior = num3;

//     alert("Maior: "+maior);
//    }

// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.

// function inverter(){
//     var num1 = parseFloat(document.getElementById("numero1").value)
//     var num2 = parseFloat(document.getElementById("numero2").value)

//     var aux = num1

//     num1 = num2
//     num2 = aux

//     alert("Antes:\n"+
//     "numero 1 = " + document.getElementById("numero1").value + '\n' +
//     "numero 2 = " + document.getElementById("numero2").value + '\n \n '+ 
//     "Invertido: \n " +
//     "Numero 1 invertido = "+ num1 + '\n' +
//     "Numero 2 invertido = "+ num2 + '\n \n')

//     console.log(num2, num1, aux)

// }

// 5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

// function maiorEmenor () {
//     var num1 = parseFloat(document.getElementById("numero1").value)
//     var num2 = parseFloat(document.getElementById("numero2").value)
//     var num3 = parseFloat(document.getElementById("numero3").value)

//     var maior = num1

//     if(num2 > num1)
//     maior = num2
//     if(num3 > num2)
//     maior = num3

//     var menor = num1

//     if(num2 < num1)
//     menor = num2
//     if(num3 < num2)
//     menor = num3

//     alert('Maior '+maior + '\n\n'+
//           'Menor '+menor 
// )
// }

// 6. Faça um script que leia três números e mostre-os em ordem decrescente.

//  function Decrescente(){
//     var num1 = parseFloat(document.getElementById('numero1').value)
//     var num2 = parseFloat(document.getElementById('numero2').value)
//     var num3 = parseFloat(document.getElementById('numero3').value)

//         var maior = num1

//     if(num2 > maior)
//     maior = num2
//     if(num3 > maior)
//     maior = num3

//      var menor = num1

//      if(num2 < menor)
//      menor = num2 ;
//      if(num3 < menor)
//      menor = num3

//     var medio = num1

//      if(num2 !== maior && num2 !== menor)
//      medio = num2
//      if(num3 !== maior && num3 !== menor)
//      medio = num3

//      alert("Ordem decrescente \n\n maior = "+ maior + '\n\n medio = '+ medio + '\n\n menor = ' + menor)
//  }

// 7. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

// function Turno(){
//     var valor = document.getElementById("turno").value

//     var turnoAluno = valor.toLowerCase()

//     if (turnoAluno == 'm') {
//         alert('Bom dia')
//     } else if (turnoAluno == 'v') {
//         alert('Boa tarde')
//     } else if (turnoAluno == 'n') {
//         alert('Boa noite')
//     } else {
//         alert('Valor invalido')
//     }

// }

// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

// function CalcularSalario (){
//     var salarioAtual = parseFloat(document.getElementById('salario').value)

//     var reajuste, salarioFinal

//     if (isNaN(salarioAtual) || salarioAtual <= 0) {
//         alert('Por favor, insira um salário válido.');
//         return;
//     }

//     if (salarioAtual <= 280 ) {
//         var reajuste = salarioAtual * 0.20
    
//     } else if (salarioAtual <= 700 ) {
//          reajuste = salarioAtual * 0.15

//     } else if (salarioAtual <= 1500 ) {
//         reajuste = salarioAtual * 0.10

//    } else {
//     reajuste = salarioAtual * 0.05
// }

//  salarioFinal = salarioAtual + reajuste

// alert('Salário antes do reajuste R$' + salarioAtual.toFixed(2) + '\n\n' +
// 'Aumentou R$' + reajuste.toFixed(2) + '\n\n' +
// 'Salário após reajuste R$' + salarioFinal.toFixed(2))

// }

// 10. Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

// function ButtonDia (){
//     var diaDaSemana = parseInt(document.getElementById('DiaDaSemana').value)

//     if(diaDaSemana <1 || diaDaSemana > 7)
//     alert('Digite um dia valido entre 1 e 7')

//     if (diaDaSemana == 1) {
//         alert('O dia da semana é Domingo')
//     } else if (diaDaSemana == 2) {
//         alert('O dia da semana é Segunda')
//     } else if (diaDaSemana == 3) {
//         alert('O dia da semana é Terça')
//     } else if (diaDaSemana == 4) {
//         alert('O dia da semana é Quarta')
//     } else if (diaDaSemana == 5) {
//         alert('O dia da semana é Quinta')
//     } else if (diaDaSemana == 6) {
//         alert('O dia da semana é Sexta')
//     } else if (diaDaSemana == 7) {
//         alert('O dia da semana é Sabado')
//     } 
// }

// 11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

// function CalcularNota() {
//     var nota1 = parseFloat(document.getElementById('nota1').value)
//     var nota2 = parseFloat(document.getElementById('nota2').value)

//     if (nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
//         alert('Por favor, insira notas válidas entre 0 e 10.')
//         return
//     }

//     var  media = (nota1 + nota2) / 2
//     var conceito, status

//     if (media <= 4 ) {
//         conceito = 'E'
//         status = 'Reprovado'
//     } else if (media <= 5.9) {
//         conceito = 'D'
//         status = 'Reprovado'
//     } else if (media <= 7.5) {
//         conceito = 'C'
//         status = 'Aprovado'
//     } else if (media <= 9) {
//         conceito = 'B'
//         status = 'Aprovado'
//     } else if (media <= 10) {
//         conceito = 'A'
//         status = 'Aprovado'

//     }

//     alert(
//         'Nota 1: ' + nota1.toFixed(2) + '\n' +
//         'Nota 2: ' + nota2.toFixed(2) + '\n' +
//         'Média: ' + media.toFixed(2) + '\n' +
//         'Conceito: ' + conceito + '\n' +
//         'Status: ' + status
//     );
// o que eu aprendi/relembrei? tofixed NUMEROS APOS A VIRGULA

// }

// 12. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//     Dicas:
//     Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
//     Triângulo Equilátero: três lados iguais;
//     Triângulo Isósceles: quaisquer dois lados iguais;
//     Triângulo Escaleno: três lados diferentes;

//  function CalcularTriangulo() {
//     var lado1 = parseFloat(document.getElementById('lado1').value)
//     var lado2 = parseFloat(document.getElementById('lado2').value)
//     var lado3 = parseFloat(document.getElementById('lado3').value)

//     if ( isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
//     alert('Insira um valor')
//     return;
//     }

//     if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
//         alert('Os lados devem ser valores maiores que zero!');
//         return;
//     }

//     if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

//         var tipo;
//         if (lado1 === lado2 && lado2 === lado3) {
//             tipo = 'Equilátero';

//         } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//             tipo = 'Isósceles';

//         } else {
//             tipo = 'Escaleno';
//         }

//         alert('Os valores formam um triângulo!\nTipo: ' + tipo);
//     } else {
//         alert('Os valores não formam um triângulo!');
//     }

    // o que eu aprendi/relembrei? usar um if dentro de outro if, usar isnan para valores nulos  
// }

// 13. Faça um script que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários.

// function CalcularRaizes(){
//     var a =parseFloat(document.getElementById('valor1').value)
//     var b =parseFloat(document.getElementById('valor2').value)
//     var c =parseFloat(document.getElementById('valor3').value)

//     var resposta = document.getElementById('resposta')

//     if (a === 0) {
//         alert('O valor de A deve ser diferente de 0')
//         return;
//     }

//     let delta = Math.pow(b, 2) - (4 * a * c)

//     if (delta > 0) {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a)
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a)
//         alert( 'Valor de delta : ' + delta + '\n\n' +
//             'Duas raízes reais X1 = '+ x1 + '\n\n X2 = ' + x2)
//     } else if ( delta === 0){
//         let x = -b / (2 * a);
//         alert('Uma raíz real : ' + x)
//     } else {
//         alert('Não existem soluções reais (apenas números complexos).')
//     }

// }

// 14. Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

// function VerificarBisexto(){
//     var ano = parseFloat(document.getElementById('ano').value)
//     var resultado = document.getElementById('resultado')

//     // var Bisexto = ano % 100

//     // if (Bisexto % 4 === 0) {
//     //     alert('É um ano bisexto')
//     // } else {
//     //     alert('Não é um ano bisexto')
//     // }

//     // o codigo que fiz nao verificava os anos bissextos que terminam com 00

//     if(isNaN(ano)) {
//         resultado.innerHTML = 'Insira um valor válido'
//         return
//     }

//     if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
//         resultado.innerHTML = 'O ano '+ ano + ' é bissexto'
//     } else {
//         resultado.innerHTML = 'O ano '+ ano + ' não é bissexto'
//     }
// }

// 15. Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

// function verificarIdade() {
//     const dataNascimento = document.getElementById('dataNascimento').value;
//     const resultado = document.getElementById('resultado');

//     // Verificar se a data foi preenchida
//     if (!dataNascimento) {
//         resultado.innerHTML = "Por favor, insira uma data de nascimento.";
//         return;
//     }

//     // Converter a data de nascimento em um objeto Date
//     const dataNascimentoDate = new Date(dataNascimento);

//     // Obter a data atual
//     const dataAtual = new Date();

//     // Calcular a idade
//     const anoNascimento = dataNascimentoDate.getFullYear();
//     const mesNascimento = dataNascimentoDate.getMonth(); // Janeiro = 0
//     const diaNascimento = dataNascimentoDate.getDate();

//     const anoAtual = dataAtual.getFullYear();
//     const mesAtual = dataAtual.getMonth();
//     const diaAtual = dataAtual.getDate();

//     let idade = anoAtual - anoNascimento;

//     // Ajustar a idade se o aniversário ainda não aconteceu este ano
//     if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
//         idade--;
//     }

//     // Verificar se a pessoa é maior de 18 anos
//     if (idade >= 18) {
//         resultado.innerHTML = `Você tem ${idade} anos. Você é maior de 18 anos. ✅`;
//     } else {
//         resultado.innerHTML = `Você tem ${idade} anos. Você NÃO é maior de 18 anos. ❌`;
//     }
// }

// 16. Faça um script que peça um número inteiro e determine se ele é par ou ímpar.
// Dica: utilize o operador módulo (resto da divisão): %

// function VerificarParImpar() {
//     let num = parseInt(document.getElementById('numero').value)
//     let resultado = document.getElementById('resultado')

//     if (num % 2 == 0) {
//         resultado.innerHTML = 'Seu numero é par'
//     } else {
//         resultado.innerHTML = 'Seu numero é impar'
//     }
// }

// 17. Faça um script que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:

// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16


// function VerificarCDE() {
//     let numero = parseInt(document.getElementById('numero').value)
//     let resultado = document.getElementById('resultado')

//     const digitos = numero.toString().split('').map(Number);
//     console.log(digitos); 

//     if (numero < 1 || numero >= 1000) {
//         resultado.innerHTML = 'Insira um valor maior que 0 e menor que 1000'
//     }


//     if (digitos.length === 3) {
//         resultado.innerHTML = digitos[0] + ' centenas ' +  digitos[1] + ' dezenas ' +  digitos[2] + ' unidades'
//     } else if(digitos.length === 2){
//         resultado.innerHTML = digitos[0] + ' dezenas ' +  digitos[1] + ' unidades'
//     } else if(digitos.length === 1){
//         resultado.innerHTML = digitos[0] + 'unidades'
//     }

// }

// 18. Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas existentes na máquina.

//  Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
//  Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.


// function CalcularNotas() {
//     let valor = parseInt(document.getElementById('saque').value);
//     let resultado = document.getElementById('resultado');

//     // Validação do valor
//     if (isNaN(valor) || valor < 10 || valor > 600) {
//         resultado.innerHTML = "Digite um valor válido (entre R$10 e R$600).";
//         return;
//     }

//     // Cálculo das notas
//     let notas100 = Math.floor(valor / 100);
//     valor %= 100;

//     let notas50 = Math.floor(valor / 50);
//     valor %= 50;

//     let notas10 = Math.floor(valor / 10);
//     valor %= 10;

//     let notas5 = Math.floor(valor / 5);
//     valor %= 5;

//     let notas1 = valor;

//     // Construção do resultado
//     let partes = [];
//     if (notas100 > 0) partes.push(`${notas100} nota${notas100 > 1 ? 's' : ''} de R$100`);
//     if (notas50 > 0) partes.push(`${notas50} nota${notas50 > 1 ? 's' : ''} de R$50`);
//     if (notas10 > 0) partes.push(`${notas10} nota${notas10 > 1 ? 's' : ''} de R$10`);
//     if (notas5 > 0) partes.push(`${notas5} nota${notas5 > 1 ? 's' : ''} de R$5`);
//     if (notas1 > 0) partes.push(`${notas1} nota${notas1 > 1 ? 's' : ''} de R$1`);

//     resultado.innerHTML = partes.join(', ').replace(/, ([^,]*)$/, ' e $1') + '.';
// }

// condição ? valor_se_verdadeiro : valor_se_falso
// Se a condição for verdadeira, retorna valor_se_verdadeiro.
// Caso contrário, retorna valor_se_falso.

// 19.Faça um script que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.


// function VerificarValor() {
//     let valor = parseFloat(document.getElementById('valor').value)
//     let resultado = document.getElementById('resultado')

//     if (valor !== Math.round(valor)) {
//         resultado.innerHTML = 'Seu numero é decimal'
//     } else {
//        resultado.innerHTML = 'Seu numero é inteiro'
//     }

// }

// 20. Faça um script que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:

//     par ou ímpar;
//     positivo ou negativo;
//     inteiro ou decimal.

// function VerificarValor() {
//     let valor = parseFloat(document.getElementById('valor').value)
//     let resultado = document.getElementById('resultado')

//     let ParImp, PosNeg, IntDeci

//     if (valor % 2 == 0) {
//         ParImp = 'Par'
//     } else {
//         ParImp = 'Impar'
//     }

//     if (valor !== Math.round(valor)) {
//         IntDeci = 'Decimal'
//     } else {
//         IntDeci = 'Inteiro'
//     }

//     if (valor < 0) {
//         PosNeg = 'Negativo'
//     } else {
//         PosNeg = 'Positivo'
//     }

//     resultado.innerHTML = 'Seu numero é: <br>' + ParImp + '<br>' + IntDeci + '<br>' + PosNeg  
// }

// 21. Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?" O script deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

// function fazerPerguntas(){
//     let resposta = 0

//     let pergunta1 = prompt('Telefonou para a vítima?')
//     if (pergunta1.toLowerCase() === 'sim') {
//         resposta++
//     }

//     let pergunta2 = prompt('Esteve no local do crime?')
//     if (pergunta2.toLowerCase() === 'sim') {
//         resposta++
//     }

//     let pergunta3 = prompt('Mora perto da vítima?')
//     if (pergunta3.toLowerCase() === 'sim') {
//         resposta++
//     }

//     let pergunta4 = prompt('Devia para a vítima?')
//     if (pergunta4.toLowerCase() === 'sim') {
//         resposta++
//     }

//     let pergunta5 = prompt('Já trabalhou com a vítima?')
//     if (pergunta5.toLowerCase() === 'sim') {
//         resposta++
//     }

//     let resultado = document.getElementById('resultado')

//     if (resposta == 5) {
//         resultado.innerHTML = 'Assasino'
//     } else if(resposta >= 3){
//         resultado.innerHTML = 'Cúmplice'
//     } else if(resposta == 2){
//         resultado.innerHTML = 'Suspeita'
//     } else {
//         resultado.innerHTML = 'Inocente'
//     }

// }

// 22. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     Álcool: até 20 litros, desconto de 3% por litro
//     acima de 20 litros, desconto de 5% por litro

//     Gasolina:
//     até 20 litros, desconto de 4% por litro
//     acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

// function PostoGasolina() {
//     let TipoCombust = document.getElementById('TipoCombustivel').value
//     let QuantCombust = parseFloat(document.getElementById('QuantCombustivel').value)

//     let resultado = document.getElementById('resultado')

//     var desconto = 0
//     let precoAlco = 1.9
//     let precoGaso = 2.5
//     var valorAtual = 0
//     var valorComDesconto = 0

//     if (TipoCombust.toLowerCase() === 'a') {
//         if (QuantCombust <= 20) {
//             valorAtual = QuantCombust * precoAlco
//             desconto = valorAtual * 0.03
//             valorComDesconto = valorAtual - desconto
//         } else if(QuantCombust > 20)
//         valorAtual = QuantCombust * precoAlco
//         desconto = valorAtual * 0.05
//         valorComDesconto = valorAtual - desconto
//     } else if (TipoCombust.toLowerCase() === 'g'){
//         if (QuantCombust <= 20) {
//             valorAtual = QuantCombust * precoGaso
//             desconto = valorAtual * 0.04
//             valorComDesconto = valorAtual - desconto
//         } else if (QuantCombust > 20){
//             valorAtual = QuantCombust * precoGaso
//             desconto = valorAtual * 0.06
//             valorComDesconto = valorAtual - desconto
//         }
        
//     }

//     resultado.innerHTML = 'Tipo combustivel: '+ (TipoCombust.toLowerCase() === 'a' ? 'Álcool' : 'Gasolina') + 
//     '<br> Valor sem desconto: '+ valorAtual.toFixed(2) + 
//     '<br> Desconto: ' + desconto.toFixed(2) + 
//     '<br> Valor final com desconto: '+ valorComDesconto.toFixed(2) 
// }

// 23. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                           Até 5 Kg                 Acima de 5 Kg
//     Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
//     Maçã              R$ 1,80 por Kg          R$ 1,50 por Kg
//     Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

// function Frutaria() {
//     let MorangosKg = parseFloat(document.getElementById('MorangosKg').value);
//     let MacasKg = parseFloat(document.getElementById('MacasKg').value);

//     let resultado = document.getElementById('resultado');

//     let precoMorango = MorangosKg <= 5 ? 2.5 : 2.2;
//     let precoMaca = MacasKg <= 5 ? 1.8 : 1.5;

//     let valorMorango = MorangosKg * precoMorango;
//     let valorMaca = MacasKg * precoMaca;
//     let valorTotal = valorMorango + valorMaca;

 
//     if (MorangosKg + MacasKg > 8 || valorTotal > 25) {
//         valorTotal -= valorTotal * 0.10;
//     }

//     resultado.innerHTML = 'Morangos Kg : ' + MorangosKg + '<br> Valor do morango : '+ valorMorango.toFixed(2) +
//     '<br>Maca Kg : ' + MacasKg + '<br> Valor maça : '+ valorMaca.toFixed(2) +
//     '<br> Valor final com desconto (se aplicável) : ' + valorTotal.toFixed(2)
       
//     }

// 24. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                           Até 5 Kg               Acima de 5 Kg
//     File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
//     Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
//     Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
//     Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

function CalcularCompra() {
    //let tipoCarne = document.getElementById('tipoCarne').value
    let tipoCarne = document.querySelector('input[name = "tipoCarne"]:checked').value
    let qntCarne = parseFloat(document.getElementById('QntCarne').value)
    let FormaPagamento = document.querySelector('input[name = "FormaPagamento"]:checked').value

    let resultado = document.getElementById('resultado')

    var precoFinal, desconto = 0

    let precoFile = qntCarne <= 5 ? 4.9 : 5.8
    let precoAlc = qntCarne <= 5 ? 5.9 : 6.8
    let precoPic = qntCarne <= 5 ? 6.9 : 7.8

    if (tipoCarne === 'File Duplo') {
        precoFinal = precoFile * qntCarne
    } else if (tipoCarne === 'Alcatra'){
        precoFinal = precoAlc * qntCarne
    } else if (tipoCarne === 'Picanha') {
        precoFinal = precoPic * qntCarne
    }

    if (FormaPagamento === 'Cartão Tabajara') {
        desconto = precoFinal * 0.05
    } 

    var valorDesconto = precoFinal - desconto

    resultado.innerHTML =  '<fieldset> Cupom fiscal: <br> <br> Tipo de carne escolhida : '+ tipoCarne +
     '<br> Quantidade de carne em Kg : ' + qntCarne +
     '<br> Valor total : ' + precoFinal.toFixed(2) +
     '<br> Forma de pagamento : ' + FormaPagamento +
     '<br> Desconto : ' + desconto.toFixed(2) +
     '<br> Valor total com desconto : ' + (desconto > 0 ? valorDesconto.toFixed(2) : precoFinal.toFixed(2)) + '</fieldset>'

}




