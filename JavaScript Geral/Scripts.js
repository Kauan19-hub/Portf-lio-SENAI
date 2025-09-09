let script = 0;
const cards = document.querySelectorAll('.card')
const carousel = document.getElementById('carousel')

let attemps = 5

function enter(input, checkFunction) {
    const input_box = document.getElementById(input)
    input_box.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            checkFunction()

        }
    })
}

/* Validador de formulário. 8 caracteres, 1 especial, maiúsculas e minúsculas. 
let inputNome = window.document.querySelector("input#nome");

let inputCPF = window.document.querySelector("input#cpf");

let inputEmail = window.document.querySelector("input#email")

let inputSenha = window.document.querySelector("input#senha")

let radioMasculino = window.document.querySelector("input#masculino")

let radioFeminino = window.document.querySelector("input#feminino")

let radioOutro = window.document.querySelector("input#outro")

let checkTecnologia = window.document.querySelector("input#tecnologia")

let checkEsportes = window.document.querySelector("input#esportes")

let checkMusica = window.document.querySelector("input#musica")

let selectEstado = window.document.querySelector("select#estado")

let buttonSubmit = window.document.getElementsByTagName("button")[0];



const verificaEspacos = (nome) =>{
    let quantEspacos = 0;
    
    for(let ch of nome){
        if(ch == ' ' ){
            quantEspacos += 1
        }
    }

    return quantEspacos
}

//Validação cpf
const validacaoCPF = (cpf) => {
    let numCPF=0;
    let operador=10

    let d10=0, d11=0

    if(cpf.length == 11){
        for(let i = 0; i < 9; i++){ 
            numCPF += operador * parseInt(cpf[i] )
            operador -= 1
        }
        
        if(numCPF < 2){
            d10 = 0
        }else{
            d10 = 11 - (numCPF % 11)
        }
        
        
        numCPF = 0
        operador = 11

        for (let i = 0; i < 10; i++) {
            numCPF += operador * parseInt(cpf[i])
            operador -= 1
        }
        
        if (numCPF < 2) {
            d11 = 0
        } else {
            d11 = 11 - (numCPF % 11)
        }
       
        
       if(cpf[9] != d10 || cpf[10] != d11){
            alert("CPF inválido!")
            return true
       }


    }else{
        alert("CPF inválido!")
        return true
    }

    return false
}

//Valores
let nomeCompleto, cpf, email, masculino, feminino, tecnologia, esportes, musica

let erros = false

buttonSubmit.addEventListener("click", ()=>{
    let nomeCompleto = inputNome.value 
    let cpf=inputCPF.value
    let email = inputEmail.value
    let senha = inputSenha.value

    let masculino = radioMasculino.checked
    let feminino = radioFeminino.checked
    let tecnologia = checkTecnologia.checked
    let esportes = checkEsportes.checked
    let musica = checkMusica.checked
    
    let estado = selectEstado.value

    let gostos = []
    let genero

    //Validação de nome
    if(nomeCompleto[0] != " " && verificaEspacos(nomeCompleto) == 1){

    }else{
        alert("Nome inválido!")
        erros = true
    }

    //Validação de cpf
    erros = validacaoCPF(cpf)

    //genero
    genero = masculino ? "masculino" : feminino ? "feminino" : "outro"

    //gostos
    if(tecnologia){
        gostos.push("tecnologia")
    }  

    if(esportes){
        gostos.push("Esportes")

    }

    if(musica){
        gostos.push("Música")
    }

    
    //estado
    if(estado == ""){
        alert("Selecione um estado!")
        erros = true
    }

    if(!erros){
        document.body.innerHTML = `<!DOCTYPE html>

 SÓ EDITAR...
*/


enter('idade', checkIdade)
enter('numero', checkParImpar)
enter('num1', checkMaior)
enter('num2', checkMaior)
enter('senha', checkSenha)
enter('temperatura', checkTemper)
enter('tabuada', checkTabu)
enter('jokenpo', checkJokenpo)
enter('factor', checkFatorial)
enter('name', checkForms)
enter('cpf', checkForms)
enter('email', checkForms)
enter('password', checkForms)
enter('gender', checkForms)

function showCards(Index) {
    carousel.style.transform = `translateX(-${Index * 100}%)`

}

function updateResult(feedback, text, type) {
    feedback.textContent = text
    feedback.classList.remove('success', 'warning', 'error', 'info')
    feedback.classList.add(type, 'show')

    setTimeout(() => feedback.classList.remove('show'), 1000)

}

showCards(script)

function checkIdade() {
    const idade = document.getElementById('idade').value.trim()
    const feedback = document.getElementById('r1')

    if (idade === "") {
        updateResult(feedback, "Inválido. Por favor, digite sua idade", "error")
        return

    }

    const idade2 = Number(idade)
    if (!Number.isInteger(idade2) || idade < 0) {
        updateResult(feedback, "Inválido. O número precisa ser inteiro", "error")

    } if (idade >= 0 && idade < 18) {
        updateResult(feedback, "Menor de idade", "warning")

    } else if (idade >= 18 && idade <= 100) {
        updateResult(feedback, "Maior de idade", "success")

    } else {
        updateResult(feedback, "Idade inválida. Tente novamente", "error")

    }
}

function checkParImpar() {
    const num = document.getElementById('numero').value.trim()
    const feedback = document.getElementById('r2')

    if (num === "") {
        updateResult(feedback, "Por favor, digite um número", "error")
        return

    }

    const numero = Number(num)
    if (!Number.isInteger(numero)) {
        updateResult(feedback, "Inválido. O número precisa ser inteiro", "error")
        return

    }
        
    if (num % 2 === 0) {
        updateResult(feedback, `O número ${num} é par`, "success")

    } else {
        updateResult(feedback, `O número ${num} é ímpar`, "warning")

    }
}

function checkMaior() {
    const numero1 = document.getElementById('num1').value.trim()
    const numero2 = document.getElementById('num2').value.trim()
    const feedback = document.getElementById('r3')

    if (numero1 === "" && numero2 === "") {
        updateResult(feedback, "Preencha os dois campos.", "error")
        return

    }

    const n1 = Number(numero1)
    const n2 = Number(numero2)
    if (isNaN(n1) || isNaN(n2)) {
        updateResult(feedback, "Erro, números inválidos", "error")
        return

    }

    if (n1 === n2) {
        updateResult(feedback, `${n1} e ${n2} são iguais`, "info")

    } else if (n1 > n2) {
        updateResult(feedback, `O número ${n1} é maior`, "success")

    } else {
        updateResult(feedback, `O número ${n2} é maior`, "warning")

    }
}

function checkSenha() {
    const senha = 202525
    const input = document.getElementById('senha').value.trim()
    const tent = Number(input)
    const feedback = document.getElementById('r4')

    if (input === "") {
        updateResult(feedback, "Inválido. Digite uma senha, por favor", "error")
        return

    }

    if (tent === senha) {
        updateResult(feedback, "Seu acesso está permitido", "success")
        attemps = 5

    } else {
        attemps--
        if (attemps > 0) {
            updateResult(feedback, `Acesso negado. Você possui ${attemps} tentativa(s)!`, "warning")
        
        } else {
            updateResult(feedback, "Acesso bloqueado!", "error")

        }  
    }
}

function checkTemper() {
    const temperatura = document.getElementById('temperatura').value.trim()
    const feedback = document.getElementById('r5')

    if (temperatura === "") {
        updateResult(feedback, "Por favor, digite a temperatura atual", "error")
        return

    }

    if (temperatura > 0 && temperatura < 18) {
        updateResult(feedback, "Ambiente frio", "info")

    } else if (temperatura <= 0) { 
        updateResult(feedback, "Ambiente extremamente frio", "info")

    } else if (temperatura >= 18 && temperatura <= 25) {
        updateResult(feedback, "Ambiente agradável", "warning")

    } else if (temperatura > 25 && temperatura <= 30) {
        updateResult(feedback, "Ambiente quente", "error")
   
    } else {
         updateResult(feedback, "Ambiente extremamente quente", "error")

    }
       
}

function checkTabu() {
    const input = document.getElementById('tabuada').value
    const number = parseFloat(input)
    const feedback = document.getElementById('r6')

    if (!Number.isInteger(number)) {
        updateResult(feedback, "Inválido. O número precisa ser inteiro", "error")
        return

    }

    if (isNaN(number)) {
        updateResult(feedback, "Erro. Digite um número", "error")
        return

    }

    if (number < 1 || number > 9) {
        updateResult(feedback, "Inválido. Por favor, digite um número de 1 a 9", "error")
        return

    }

    let result = `Tabuada do ${number}:<br>`
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`

    }

    feedback.innerHTML = result
    feedback.classList.remove('success', 'error', 'warning', 'info')
    feedback.classList.add('info', 'show')

    setTimeout(() => feedback.classList.remove('show'), 2000)

}

function checkJokenpo() {
    const userChoices = document.getElementById('jokenpo').value.trim().toLowerCase()
    const feedback = document.getElementById('r7')

    const choices = ['pedra', 'papel', 'tesoura']
    const userChoice = choices.indexOf(userChoices)

    if (userChoice === -1) {
        updateResult(feedback, "Inválido. Escolha entre Pedra, Papel ou Tesoura", "error")
        return

    }

    const computerChoice = Math.floor(Math.random() * 3)
    const choices1 = userChoice
    const choices2 = computerChoice

    if (choices1 === choices2) {
        updateResult(feedback, "Empatado!", "info")
        return

    } else if (
        (choices1 === 0 && choices2 === 2) || (choices1 === 1 && choices2 === 0) || (choices1 === 2 && choices2 === 1)

    ) {
    
        updateResult(feedback, "Jogador venceu!", "success")
        return

    } else {
        updateResult(feedback, "A máquina venceu!", "error")
        return

    }   
}

function checkFatorial() {
    const input = document.getElementById('factor').value
    const number = parseFloat(input)
    const feedback = document.getElementById('r8')

    if (isNaN(number)) {
        updateResult(feedback, "Digite um número válido", "error")
        return

    }

    if (!Number.isInteger(number)) {
        updateResult(feedback, "Erro, o número precisa ser inteiro", "error")
        return

    }

    if (number < 0) {
        updateResult(feedback, "Número inválido. Ele não pode ser negativo", "error")
        return

    }

    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i

    }

    updateResult(feedback, `Fatorial de ${number} é ${factorial}`, "success")
    
}

function resultAnimate(resposta) {
    resposta.classList.remove('show')
    void resposta.offsetwidth
    resposta.classList.add('show')

}

function animateWrite(element, text, speed = 90) {
    let i = 0
    function writing() {
        if (i < text.length) {
            element.textContent += text.charAt(i)
            i++

            setTimeout(writing, speed)
        }
    }
    writing()
}

function checkForms() {
    const name = document.getElementById('name').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const gender = document.getElementById('gender').value
    const feedback = document.getElementById('r9')


}

const name_of_element = document.getElementById('type')
animateWrite(name_of_element, 'Kauan Vinícius', 120)

const navResponsive = document.querySelector('.menu_responsive')
const nav = document.querySelector('.navegation')

navResponsive.addEventListener('click', () => nav.classList.toggle('active'))