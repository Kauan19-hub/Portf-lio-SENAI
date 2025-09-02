//Senha definida
let senha = 202525

//Solicita a senha
let tentativa = parseInt(prompt("Digite a senha: "))

//Condição
if (tentativa === senha) {
  alert("Acesso permitido. ")

} else {
  alert("Acesso negado. ")
}