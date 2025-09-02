//Solicita a temperatura atual
let temperatura_atual = parseFloat(prompt("Digite a temperatura atual em graus Celcius (°C): "))

//Condição
if (temperatura_atual < 18) {
  temp = "Frio"

} else if (temperatura_atual >= 18 && temperatura_atual <= 25) {
  temp = "Agradável"

} else {
  temp = "Quente"
}

alert(`Temperatura atual: ${temp}.`)
