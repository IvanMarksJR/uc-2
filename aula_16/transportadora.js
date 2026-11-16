import PromtSync from "prompt-sync";

const entrada = PromtSync();

const placaveiculo = entrada("Digite a  placa do veiculo:")
const distancia = Number(entrada("Digite a distância em (KM):"))
const veiculo = entrada("Digite o veiculo:")

console.log("--------------------")
console.log("---------------")
console.log("----------")
console.log("-----")
console.log("Placa:", placaveiculo)
console.log("Distância (km):", distancia)
console.log("Veiculo:", veiculo)
console.log(`Distância:, ${distancia} km`)
console.log("Número finito:", Number.isFinite(distancia))
