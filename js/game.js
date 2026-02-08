import { normalizeWord } from "./utils.js"
import { renderBoard, updateRow, showMessage } from "./ui.js"
import { paintKey } from "./keyboard.js"

let secret = ""
let attempts = 0
let maxAttempts = 0
let currentRow = 0
let gameOver = false

export function initGame() {
    secret = normalizeWord(prompt("Jogador 1: Digite a palavra secreta").trim())
    maxAttempts = Math.ceil(secret.length * 1.2)
    attempts = 0
    currentRow = 0
    gameOver = false

    renderBoard(maxAttempts, secret.length)
}

export function submitGuess(guess) {
    if (gameOver) return

    guess = normalizeWord(guess)

    if (guess.length !== secret.length) {
        showMessage("Tamanho Incorreto")
        return
    }

    const result = evaluateGuess(secret, guess)
    updateRow(currentRow, guess, result)

    result.forEach((r, i) => paintKey(guess[i], r))

    attempts++
    currentRow++


    console.log({
  secret,
  guess,
  equal: secret === guess,
  result
})

    if(guess === secret){
          showMessage("Voce venceu!")
        gameOver = true
        return
    }

    if (result.every(r => r === "green")) {
        showMessage("Voce venceu!")
        gameOver = true
    } else if (attempts >= maxAttempts) {
        showMessage("Voce perdeu!")
        gameOver = true
    }





}

function evaluateGuess(secret, guess) {
    const result = Array(secret.length).fill("gray")
    const used = Array(secret.length).fill(false)

    for (let i = 0; i < secret.length; i++) {
        if (guess[i] === secret[i]) {
            result[i] = "green"
            used[i] = true
            console.log(result)
        }
    }

    for (let i = 0; i < secret.length; i++) {

        if (result[i] === "green") continue

        for (let j = 0; j < secret.length; j++) {
            if (!used[j] && guess[i] === secret[j]) {
                result[i] = "yellow"
                used[j] = true
                break
            }
        }
    }

    return result

}