// A recepção precisa obter os valores necessários para o cálculo de uma reserva.

// 1. Solicite nome do hóspede, quantidade de diárias e valor unitário.
// 2. Converta as duas entradas numéricas usando Number.
// 3. Calcule e exiba o valor bruto da hospedagem.

import PromtSync from "prompt-sync";

const entrada = PromtSync()

const nome = entrada("Digite nome do hospode:")
const quantidade_diaria = Number(entrada("Quantas diarias?"))
const valor = Number(entrada("Digite o valor da diaria:"))

const total = quantidade_diaria * valor

console.log("Hóspede:", nome)
console.log("Diárias:", quantidade_diaria)
console.log("Valor da diária:", valor)
console.log("Total bruto:", total)