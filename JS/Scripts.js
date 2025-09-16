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

//Função idade
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
        updateResult(feedback, "Idade inválida.", "error")

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
        updateResult(feedback, "Inválido. Preencha os dois campos.", "error")
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
    let inputName = document.getElementById('name').value.trim()
    let inputCPF = document.getElementById('cpf').value.trim()
    let inputEmail = document.getElementById('email').value.trim()
    let inputPassword = document.getElementById('password').value.trim()
    let selectGender = document.getElementById('gender').value.trim()
    let feedback = document.getElementById('r9')

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
        
    if   (/\d/.test(selectGender)) {
        updateResult(feedback, "Inválido. Números não são reconhecidos", "error")
        return
        
    }

    updateResult(feedback, "Seu cadastro foi realizado", "success")

}

//Animação de digitação no nome
const name_of_element = document.getElementById('type')
animateWrite(name_of_element, 'Kauan Vinícius', 120)

const navResponsive = document.querySelector('.menu_responsive')
const nav = document.querySelector('.navegation')

navResponsive.addEventListener('click', () => nav.classList.toggle('active'))
