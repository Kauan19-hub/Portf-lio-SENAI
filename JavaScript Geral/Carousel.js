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

    if (idade >= 0 && idade < 18) {
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

function resultAnimate(resposta) {
    resposta.classList.remove('show')
    void resposta.offsetwidth
    resposta.classList.add('show')
}

