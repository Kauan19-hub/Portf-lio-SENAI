​//Solicita os números
let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))

//Condição
if (numero1 == numero2) {
  alert(`${numero1} e ${numero2} são iguais`)

} else if (numero1 > numero2) {
  alert(`${numero1} é maior`)

} else {
  alert(`${numero2} é maior`)
}