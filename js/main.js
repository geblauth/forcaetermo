import {initGame, submitGuess} from "./game.js"
import { initKeyboard } from "./keyboard.js"

document.addEventListener("DOMContentLoaded",() =>{

const input = document.getElementById("guessInput")
const btn = document.getElementById("submitBtn")

initGame()

btn.onclick = () =>{
    submitGuess(input.value)
    input.value=""
}

initKeyboard(letter => {
    input.value += letter
})

window.addEventListener("keydown", e =>{
    if(e.key === "Enter") btn.click()
})
})