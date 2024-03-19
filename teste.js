let x = 17
let y = 5
let z = 8
                        
resultadoBooleano =  (x < y) && (z > x) || (x - y > z)
//console.log(resultadoBooleano)

const listaDeNumeros = [1, 2, 3, 4, 5];
let soma = 0;

/*for (let i = 0; i < listaDeNumeros.length; i++) {
  soma += listaDeNumeros[i];
}

//console.log("A soma dos números é:", soma);

function calculaOrcamento(){

    var gastos = [1800, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var saldo = 0; 
    var statusSaldo =  'positivo';
    var i = 1;

    do{
        totalGastos += gastos[i];
        i++;
    } while(salario >= totalGastos && i<gastos.length)
    
    saldo = salario - totalGastos;

    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

function calculaOrcamento2(){

    var gastos = [1800, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var statusSaldo =  'positivo';
    var saldo = 0;
    var i = 1;

    while(salario >= totalGastos && i<gastos.length){
        totalGastos += gastos[i];
        i++;
    }

    saldo = salario - totalGastos;
    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

//calculaOrcamento();
//calculaOrcamento2();

/*var saldo = 1000;
var limiteCredito = 500;
var valorCompras = [200, 800, 300, 400, 600];

for (var i = 0; i < valorCompras.length; i++) {
    var valorCompra = valorCompras[i];

    if (valorCompra <= saldo) {
        console.log("Compra " + (i+1) + " aprovada. Saldo restante: " + (saldo - valorCompra));
        saldo -= valorCompra;
    } else if (valorCompra <= saldo + limiteCredito) {
        console.log("Compra " + (i+1) + " aprovada com limite de crédito. Saldo restante: " + ((saldo + limiteCredito) - valorCompra));
        saldo = 0;
        limiteCredito -= (valorCompra - saldo);
    } else {
        console.log("Compra " + (i+1) + " negada. Saldo insuficiente e limite de crédito excedido.");
    }
}*/

/*Você foi contratado(a) como estagiário(a) da Tesla e está participando 
do desenvolvimento de um programa para simular o desempenho de um carro 
elétrico em uma corrida. Seu objetivo é determinar em quantos minutos o carro 
levará para completar uma determinada distância, levando em consideração uma velocidade 
inicial e uma taxa de aceleração constante. No entanto, você deseja garantir que o carro 
não exceda uma velocidade máxima nem que a corrida demore mais do que um tempo máximo. 
Implemente a lógica dessa simulação em pseudocódigo. */

/*algoritmo "DesempenhoCarro"

var
    tempo, distancia, velocidadeInicial, aceleracao, velocidadeMaxima, tempoMaximo: real

inicio
    tempo = 0

    enquanto (velocidade < velocidadeMaxima) e (tempo < tempoMaximo) faca
        velocidade = velocidade + aceleracao * tempo
        distanciaAtual = velocidade * tempo
        distanciaFinal = distanciaFinal - distanciaAtual

        tempo = tempo +1

        se distanciaFinal <= 0 entao
            escreval("O tempo gasto para essa corrida foi de" + tempo + "minutos")
        fimse

*/

let matrizA = [[1, 2, 3], 
               [4, 5, 6], 
               [7, 8, 9]];

let matrizB = [[9, 8, 7], 
               [6, 5, 4], 
               [3, 2, 1]];

               let matrizR = []; 
               let mult;
               
function multiplicarMatrizes(matriz1, matriz2) {
               
    for (let i = 0; i < matriz1.length; i++) { //linha da Matriz A
        matrizR[i] = [];
        for (let j = 0; j < matriz2[0].length; j++) { //coluna da Matriz B
            mult = 0;
            for (let c = 0; c < matriz1[0].length; c++){ // coluna da Matriz A
                mult += (matriz1[i][c] * matriz2[c][j]);
            }
            matrizR[i][j] = mult;
        }
    }
    
    console.table(matrizR);
                  
    }
               
multiplicarMatrizes(matrizA, matrizB);