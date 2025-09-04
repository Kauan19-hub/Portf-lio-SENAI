let caroul= 0;
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

enter('idade', checkIdade)
enter('numero', checkParImpar)
enter('num1', checkMaior)
enter('num2', checkMaior)
enter('senha', checkSenha)
enter('temperatura', checkTemper)
enter('tabuada', checkTabu)
enter('jokenpo', checkJokenpo)
enter('factor', checkFatorial)

function showCards(Index) {
    carousel.style.transform = `translateX(-${Index * 100}%)`

}

function updateResult(feedback, text, type) {
    feedback.textContent = text
    feedback.classList.remove('success', 'warning', 'error', 'info')
    feedback.classList.add(type, 'show')

    setTimeout(() => feedback.classList.remove('show'), 1000)

}

showCards(caroul)

function checkIdade() {
    const idade = Number(document.getElementById('idade').value)
    const feedback = document.getElementById('r1')

    if (isNaN(idade) || idade < 0 ) {
        updateResult(feedback, "Inválido. Digite um número válido", "error")
        return
    
    } else if (idade >= 0 && idade < 18) {
        updateResult(feedback, "Menor de idade", "warning")

    } else if (idade >= 18 && idade <= 100) {
        updateResult(feedback, "Maior de idade", "success")

    } else {
        updateResult(feedback, "Idade inválida. Tente novamente", "error")

    }
}

function checkParImpar() {
    const num = parseInt(document.getElementById('numero').value)
    const feedback = document.getElementById('r2')

    if (num % 2 === 0) {
        updateResult(feedback, `O número ${num} é par`, "success")

    } else {
        updateResult(feedback, `O número ${num} é ímpar`, "warning")

    }
}

function checkMaior() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    const feedback = document.getElementById('r3')
    
    if (num1 === num2) {
        updateResult(feedback, `${num1} e ${num2} são iguais`, "info")

    } else if (num1 > num2) {
        updateResult(feedback, `O número ${num1} é maior`, "success")

    } else {
        updateResult(feedback, `O número ${num2} é maior`, "warning")

    }
}

function checkSenha() {
    const senha = 202525
    const tent = parseInt(document.getElementById('senha').value)
    const feedback = document.getElementById('r4')

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
    const temperatura = parseFloat(document.getElementById('temperatura').value)
    const feedback = document.getElementById('r5')

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
    const number = parseInt(document.getElementById('tabuada').value)
    const feedback = document.getElementById('r6')

    if (isNaN(number) || number < 1 || number > 9) {
        updateResult(feedback, "Erro. Digite um número de 1 a 9", "error")
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
    const userSTR = choices[userChoice]
    const pcSTR = choices[computerChoice]

    let result = `Jogador: ${userSTR}, Máquina: ${pcSTR}<br>`

    if (userChoice === computerChoice) {
        updateResult(feedback, "Empatado!", "info")
        return

    } else if (
        (userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)

    ) {
        
        updateResult(feedback, "Jogador venceu!", "success")
        return

    } else {
        updateResult(feedback, "A máquina venceu!", "error")
        return

    }   
}

function checkFatorial() {
    const number = parseInt(document.getElementById('factor').value)
    const feedback = document.getElementById('r8')

    if (isNaN(number) || number < 0 ) {
        updateResult(feedback, "Inválido. Digite um número válido", "error")
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

