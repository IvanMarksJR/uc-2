// Situação-problema
// Uma empresa de entregas precisa estimar a quantidade de combustível e o custo de uma
// viagem antes da saída do veículo.

// Especificação da atividade
// 1. Solicite o nome do motorista, a distância da viagem em quilômetros, o consumo
// médio do veículo em km/L e o preço por litro.
// 2. Converta as três entradas numéricas utilizando Number.
// 3. Divida a distância pelo consumo médio para calcular a quantidade de litros
// necessária.
// 4. Calcule e exiba o custo estimado da viagem.

// Exemplo de verificação
// Teste: 180 km, consumo de 15 km/L e combustível a R$ 6 por litro
// resultam em 12 litros e custo de R$ 72.

import PromtSync from "prompt-sync";

const entrada = PromtSync();

const nome = entrada("Digite do motorista:");
const distancia = Number(entrada("Digite a distância (em KM):"));
const consumo = Number(entrada("Digite o consumo médio do veículo em KM/L:"));
const preco = Number(entrada("Digite o preço por litro:"));

const litros_necessario = distancia / consumo;
const valortotal = litros_necessario * preco;

console.log("Motorista", nome);
console.log("Distância KM", distancia);
console.log("Donsumo médio em KM", consumo);
console.log("Preço por litro:", preco);
console.log("Combustivel necessario (L):", litros_necessario);

console.log(valortotal);
