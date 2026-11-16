// CAPÍTULO 4 — ATIVIDADE 1 DE 5
// Índice de massa corporal

import PromptSync from "prompt-sync";

const entrada = PromptSync();

// const peso = entrada("Digite seu peso em (Kg):");
// const altura = entrada("Digite sua altura em (Metros)>:");
// const imc = peso / altura ** 2;

// console.log(imc.toFixed(2));

// CAPÍTULO 4 — ATIVIDADE 2 DE 5
// Troco de compra

// const valorPago = entrada("Valor recebido:")
// const valorCompra = entrada("Valor da compra:")

// const troco = valorPago - valorCompra

// console.log("Troco: R$",troco.toFixed(2))

// CAPÍTULO 4 — ATIVIDADE 3 DE 5
// Área de piso

const comprimento = entrada("Insira o comprimento em (metros):");
const largura = entrada("Insira a largura em (metros):");

const areapiso = comprimento * largura;

console.log(`Área do piso: ${areapiso.toFixed(2)} m²`)