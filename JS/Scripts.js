//Definições de Arrow Function
let script = 0;
const cards = document.querySelectorAll('.card')
const carousel = document.getElementById('carousel')

let attemps = 5

//Função para enviar respostas com a tecla 'ENTER'
function enter(input, checkFunction) {
    const input_box = document.getElementById(input)
    input_box.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            checkFunction()

        }
    })
};

//Função 'enter' sendo aplicada em todos os exercícios
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
enter('name2', checkNameS)
enter('materiaFav', checkMateriaFav)
enter('date', checkDate)
enter('number1', checkCalc)
enter('number2', checkCalc)
enter('oper', checkCalc)
enter('nt1', checkMedia)
enter('nt2', checkMedia)
enter('nt3', checkMedia)
enter('width', checkPaint)
enter('height', checkPaint)
enter('nn1', checkDiference)
enter('nn2', checkDiference)
enter('numberr1', checkDivNote)
enter('numberr2', checkDivNote)
enter('n1', checkVetor1)
enter('n2', checkVetor1)
enter('n3', checkVetor1)
enter('n4', checkVetor1)
enter('n5', checkVetor1)
enter('nmro1', checkVetor2)
enter('nmro2', checkVetor2)
enter('nmro3', checkVetor2)
enter('nmro4', checkVetor2)
enter('nmro5', checkVetor2)
enter('nmro6', checkVetor2)
enter('nmro7', checkVetor2)
enter('nmro8', checkVetor2)
enter('idade', checkVetor3)
enter('contador', checkVetor3)

//Animação das respostas 
function showCards(Index) {
    carousel.style.transform = `translateX(-${Index * 100}%)`

}

//Definição das cores de cada resposta: 'SUCESSO', 'ERRO', 'ALERTA', 'INFO'
function updateResult(feedback, text, type) {
    feedback.textContent = text
    feedback.classList.remove('success', 'warning', 'error', 'info')
    feedback.classList.add(type, 'show')

    setTimeout(() => feedback.classList.remove('show'), 1000)

}

showCards(script)

//Função idade, para definir a classificação
function checkIdade() {
    const idade = document.getElementById('idade').value.trim()
    const feedback = document.getElementById('r1')

    if (idade === "") {
        updateResult(feedback, "Inválido. Digite sua idade", "error")
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
        updateResult(feedback, "Idade inválida", "error")

    }
}

//Função números pares e ímpares
function checkParImpar() {
    const num = document.getElementById('numero').value.trim()
    const feedback = document.getElementById('r2')

    if (num === "") {
        updateResult(feedback, "Inválido. Digite um número", "error")
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

//Função número maior e menor
function checkMaior() {
    const numero1 = document.getElementById('num1').value.trim()
    const numero2 = document.getElementById('num2').value.trim()
    const feedback = document.getElementById('r3')

    if (numero1 === "" && numero2 === "") {
        updateResult(feedback, "Inválido. Preencha os dois campos", "error")
        return

    }

    const n1 = Number(numero1)
    const n2 = Number(numero2)
    if (isNaN(n1) || isNaN(n2)) {
        updateResult(feedback, "Números inválidos", "error")
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

//Função senha com uma senha correta definida e limite de tentativas
function checkSenha() {
    const senha = 202525
    const input = document.getElementById('senha').value.trim()
    const tent = Number(input)
    const feedback = document.getElementById('r4')

    if (input === "") {
        updateResult(feedback, "Inválido. Digite uma senha", "error")
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
            updateResult(feedback, "Seu acesso está bloqueado!", "error")

        }  
    }
}

//Função temperatura, a resposta muda conforme a temperatura registrada
function checkTemper() {
    const temperatura = document.getElementById('temperatura').value.trim()
    const feedback = document.getElementById('r5')

    if (temperatura === "") {
        updateResult(feedback, "Inválido. Digite a temperatura atual", "error")
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

//Função tabuada, onde imprime tabuada de números de 1 a 9
function checkTabu() {
    const input = document.getElementById('tabuada').value
    const number = parseFloat(input)
    const feedback = document.getElementById('r6')

    if (!Number.isInteger(number)) {
        updateResult(feedback, "Inválido. O número precisa ser inteiro", "error")
        return

    }

    if (isNaN(number)) {
        updateResult(feedback, "Digite um número", "error")
        return

    }

    if (number < 1 || number > 9) {
        updateResult(feedback, "Inválido. Digite um número de 1 a 9", "error")
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

/* Função pedra, papel e tesoura, o jogo pode dar empate, o jogador pode ganhar ou perder,  e a máquina pode
ganhar ou perder */
function checkJokenpo() {
    const userChoices = document.getElementById('jokenpo').value.trim().toLowerCase()
    const feedback = document.getElementById('r7')

    const choices = ['pedra', 'papel', 'tesoura']
    const userChoice = choices.indexOf(userChoices)

    if (userChoice === -1) {
        updateResult(feedback, "Inválido. Escolha entre pedra, papel ou tesoura", "error")
        return

    }

    const computerChoice = Math.floor(Math.random() * 3)
    const choices1 = userChoice
    const choices2 = computerChoice

    if (choices1 === choices2) {
        updateResult(feedback, "Jogo empatado", "info")
        return

    } else if (
        (choices1 === 0 && choices2 === 2) || 
        (choices1 === 1 && choices2 === 0) ||
         (choices1 === 2 && choices2 === 1)

    ) {
    
        updateResult(feedback, "Jogador venceu", "success")
        return

    } else {
        updateResult(feedback, "A máquina venceu", "error")
        return

    }   
}

//Função fatorial, onde qualquer número INTEIRO tem o seu fatorial exibido
function checkFatorial() {
    const input = document.getElementById('factor').value
    const number = parseFloat(input)
    const feedback = document.getElementById('r8')

    if (isNaN(number)) {
        updateResult(feedback, "Digite um número válido", "error")
        return

    }

    if (!Number.isInteger(number)) {
        updateResult(feedback, "Inválido. 0 número precisa ser inteiro", "error")
        return

    }

    if (number < 0) {
        updateResult(feedback, "Inválido. Número não pode ser negativo", "error")
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

//Função formulário, cada inbox tem suas regras, e fórmulas reais para validação 
function checkForms() {
    const inputName = document.getElementById('name').value.trim()
    const inputCPF = document.getElementById('cpf').value.trim()
    const inputEmail = document.getElementById('email').value.trim()
    const inputPassword = document.getElementById('password').value.trim()
    const selectGender = document.getElementById('gender').value.trim()
    const feedback = document.getElementById('r9')

    if (inputName === "") {
        updateResult(feedback, "Digite seu nome", "error")
        return

    }

    if (inputName.length < 5) {
        updateResult(feedback, "Seu nome precisa ter ao menos 5 caracteres", "warning")
        return

    }

    //Fórmula para validação real de CPF
    const verifyCPF = c => {
        c = c.replace(/\D/g,"");
        return c.length == 11 &&
            !/^(\d)\1+$/.test(c) &&
            [9, 10].every(j => 
                (c.slice(0, j).split("").reduce((s, n, i) => s + n * (j + 1 - i), 0) * 10 % 11 % 10) == c[j]

        ); 

    }
        
    if (inputCPF === "") {
        updateResult(feedback, "Digite seu CPF", "error")
        return

    }

    if (!verifyCPF(inputCPF)) {
        updateResult(feedback, "CPF inválido", "error")
        return

    }

    //Fórmula real de validação de E-mail
    const emaill = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (inputEmail === "") {
        updateResult(feedback, "Digite seu email", "error")
        return

    }

    if (!emaill.test(inputEmail)) {
        updateResult(feedback, "Email inválido", "error")
        return

    }

    if (inputPassword === "") {
        updateResult(feedback, "Digite uma senha", "error")
        return

    }

    if (inputPassword.length < 3) {
        updateResult(feedback, "A senha precisa ter no mínimo 3 caracteres", "warning")
        return

    }

    /* Função do gênero. O inbox do gênero, é inclusivo. Como pussui vários, não temos um gênero errado,
    a não ser que seja um número */
    if (selectGender.trim() === "") {
        updateResult(feedback, "Selecione seu gênero", "error")
        return

    }
    
    //Não aceita números, apenas textos (Strings)
    if   (/\d/.test(selectGender)) {
        updateResult(feedback, "Inválido. Números não são reconhecidos", "error")
        return
        
    }

    updateResult(feedback, "Seu cadastro foi realizado", "success")

}

//Função de saudações. Usuário digita seu nome, e automaticamente, a máquina o retorna com uma menagem
function checkNameS() {
   const name = document.getElementById('name2').value.trim()
   const  feedback = document.getElementById('r10')

    if (name.trim() === "") {
        updateResult(feedback, "Inválido. Digite o seu nome", "error")
        return

    }

    //Mesma coisa do exercício anterior, ele não aceita números, e aceita maiúsculo e minúsculo
    if  (/\d/.test(name)) {
        updateResult(feedback, "Inválido. Números não são reconhecidos", "error")
        return

    }

    updateResult(feedback, `Olá, ${name}! Prazer em conhecê-lo`, "success")

}

/* Função de matéria favorita, onde o usuário digita a matéria que mais gosta e a máquina o retorna
com uma mensagem */
function checkMateriaFav() {
    const inputMateria = document.getElementById('materiaFav').value.trim()
    const feedback = document.getElementById('r11')

     if (inputMateria.trim() === "") {
        updateResult(feedback, "Inválido. Digite a sua matéria favorita", "error")
        return

    }

    //Fórmula de validação de número
    if  (/\d/.test(inputMateria)) {
        updateResult(feedback, "Inválido. Números não são reconhecidos", "error")
        return

    }

    updateResult(feedback, `A matéria de ${inputMateria} é uma boa escolha`, "success")

}

/* Função de data atual, onde o usuário digita a data atual, e máquina o retorna novamente
com uma mensagem */
function checkDate() {
    const inputDate = document.getElementById('date').value.trim()
    const feedback = document.getElementById('r12')

     if (inputDate.trim() === "") {
        updateResult(feedback, "Inválido. Digite a data de hoje", "error")
        return

    }

    updateResult(feedback, `Seja bem-vindo em ${inputDate}`, "success")

}

/* Função de uma mini calculadora, o usuário escolhe os  números e uma das 4 operações
desejadas */
function checkCalc() {
    const inputCalc1 = parseFloat(document.getElementById('number1').value.trim())
    const inputCalc2 = parseFloat(document.getElementById('number2').value.trim())
    const operation = document.getElementById('oper').value.trim()
    const feedback = document.getElementById('r13')
    
    const addition = inputCalc1 + inputCalc2
    const subtraction = inputCalc1 - inputCalc2
    const multiplication = inputCalc1 * inputCalc2
    const division = inputCalc1 / inputCalc2

     if (isNaN(inputCalc1)) {
        updateResult(feedback, "Inválido. Digite o número", "error")
        return

     }

     if (isNaN(inputCalc2)) {
        updateResult(feedback, "Inválido. Digite o número", "error")
        return
        
     }

     if (operation === "+") {
        updateResult(feedback, `${inputCalc1} + ${inputCalc2} é igual a ${addition.toFixed(2)}`, "info")
        return

     } else if (operation === "-") {
         updateResult(feedback, `${inputCalc1} - ${inputCalc2} é igual a ${subtraction.toFixed(2)}`, "info")
         return

     } else if (operation === "*") {
        updateResult(feedback, `${inputCalc1} * ${inputCalc2} é igual a ${multiplication.toFixed(2)}`, "info")
        return

     } else if (operation === "/") {
        updateResult(feedback, `${inputCalc1} / ${inputCalc2} é igual a ${division.toFixed(2)}`, "info")
        return

     } else {
         updateResult(feedback, "Inválido. Operação não reconhecida", "error")
        return

     }
        
}

//Função média de notas, onde é calculada a média de 3 notas escolhidas pelo usuário
function checkMedia() {
    const note1 = parseFloat(document.getElementById('nt1').value.trim())
    const note2 = parseFloat(document.getElementById('nt2').value.trim())
    const note3 = parseFloat(document.getElementById('nt3').value.trim())
    const feedback = document.getElementById('r14')

    let media = (note1 + note2 + note3) / 2

    if (isNaN(note1)) {
         updateResult(feedback, "Inválido. Digite uma nota", "error")
        return

    }

    if (isNaN(note2)) {
         updateResult(feedback, "Inválido. Digite uma nota", "error")
        return

    }

    if (isNaN(note3)) {
         updateResult(feedback, "Inválido. Digite uma nota", "error")
        return

    }

    updateResult(feedback, `Média da soma: ${media.toFixed(1)}`, "success")

}

/* Função de checar altura e largura da parede, para assim, calcular quantos litros são
necessários para a pintua */
function checkPaint() {
    const inputWidth = parseFloat(document.getElementById('width').value.trim())
    const inputHeight = parseFloat(document.getElementById('height').value.trim())
    const feedback = document.getElementById('r15')

    const area = inputWidth * inputHeight
    const paint = (area / 2).toFixed(2)

    if (isNaN(inputWidth)) {
        updateResult(feedback, "Inválido. Digite a largura", "error")
        return

    }

    if (inputWidth <= 0) {
        updateResult(feedback, "A largura precisa ser maior que 0", "warning")
        return

    }

     if (inputHeight <= 0) {
        updateResult(feedback, "A altura precisa ser maior que 0", "warning")
        return
        
    }
    
     if (isNaN(inputHeight)) {
        updateResult(feedback, "Inválido. Digite a altura", "error")
        return

    }

    updateResult(feedback, `Vão ser necessários, ${paint} litros de tinta para pintar a parede`, "success")

}

//Função de diferença de números
function checkDiference() {
    const number1 = parseFloat(document.getElementById('nn1').value.trim())
    const number2 = parseFloat(document.getElementById('nn2').value.trim())
    const feedback = document.getElementById('r16')

    let diference

    if (number1 > number2) {
        diference = number1 - number2

    } else {
        diference = number2 - number1

    }

    if (isNaN(number1)) {
        updateResult(feedback, "Inválido. Digite um número", "error")
        return

    }

    if (isNaN(number2)) {
        updateResult(feedback, "Inválido. Digite um número", "error")
        return

    }

    /* .toFixed(2) seria igual ao :.2f 'format' do Python, para formatação de número, no caso seria: 'format de
    2 casas decimais */
    updateResult(feedback, `A diferença é entre ${diference.toFixed(2)} número(s)`, "success")

}

//Função da divisão de notas, se as duas notas são, ou não divisíveis por eles mesmos
function checkDivNote() {
    const inputN1 = parseFloat(document.getElementById('numberr1').value.trim())
    const inputN2 = parseFloat(document.getElementById('numberr2').value.trim())
    const feedback = document.getElementById('r17')

    if (isNaN(inputN1)) {
        updateResult(feedback, "Inválido. Digite uma nota", "error")
        return

    }

    if (isNaN(inputN2)) {
        updateResult(feedback, "Inválido. Digite uma nota", "error")
        return
        
    }

    if (inputN1 === 0) {
        updateResult(feedback, "Não é possível dividir por 0", "error")
        return

    } else if (inputN1 % inputN2 === 0) {
        updateResult(feedback, `${inputN1} é múltiplo de ${inputN2}`, "success")
        return

    } else {
         updateResult(feedback, `${inputN1} não é múltiplo de ${inputN2}`, "info")
         return

    }

}

function checkVetor1() {
    const numero1 = parseInt(document.getElementById('n1').value.trim())
    const numero2 = parseInt(document.getElementById('n2').value.trim())
    const numero3 = parseInt(document.getElementById('n3').value.trim())
    const numero4 = parseInt(document.getElementById('n4').value.trim())
    const numero5 = parseInt(document.getElementById('n5').value.trim())
    const feedback = document.getElementById('r18')

    const numeros = [numero1, numero2, numero3, numero4, numero5]

    if (numeros.some(isNaN)) {
        updateResult(feedback, "Inválido. Os campos devem ser preenchidos com números inteiros", "error")
        return

    }

    const soma = numeros.reduce((acc, val) => acc + val, 0)
    const media = soma / numeros.length
    const maiorNumero = Math.max(...numeros)
    const menorNumero = Math.min(...numeros)

    updateResult(feedback, `Soma: ${soma}, Média: ${media.toFixed(2)}, Maior: ${maiorNumero}, Menor: ${menorNumero}`, "info")

}

function checkVetor2() { 
    const numero1 = parseInt(document.getElementById('nmro1').value.trim())
    const numero2 = parseInt(document.getElementById('nmro2').value.trim())
    const numero3 = parseInt(document.getElementById('nmro3').value.trim())
    const numero4 = parseInt(document.getElementById('nmro4').value.trim())
    const numero5 = parseInt(document.getElementById('nmro5').value.trim())
    const numero6 = parseInt(document.getElementById('nmro6').value.trim())
    const numero7 = parseInt(document.getElementById('nmro7').value.trim())
    const numero8 = parseInt(document.getElementById('nmro8').value.trim())
    const feedback = document.getElementById('r19')
    
    
    const numeros = [numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8]

    if (numeros.some(isNaN)) {
        updateResult(feedback, "Inválido. Os campos devem ser preenchidos com números inteiros", "error")
        return
    }

    const soma = numeros.reduce((acc, val) => acc + val, 0)
    const mediaNumeros = soma / numeros.length
    
    updateResult(feedback, `Média aritmética: ${mediaNumeros.toFixed(2)}`, "success")

}

//Animação de digitação no nome
const name_of_element = document.getElementById('type')
animateWrite(name_of_element, 'Kauan Vinícius', 120)

//Permite que a navbar em tela mobile seja clicável
const navResponsive = document.querySelector('.menu_responsive')
const nav = document.querySelector('.navegation')

navResponsive.addEventListener('click', () => nav.classList.toggle('active'))


