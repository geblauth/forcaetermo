const keyboard = document.getElementById("keyboard")
const keys {}

const layout = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM"
]

export function initKeyboard(onKey){
    keyboard.innerHTML = ""

    layout.forEach(row =>{
        const div = document.createElement("div")
        div.className = "key-row"

        row.split("").forEach(letter =>{
            const btn = document.createElement("button")
            btn.textContent = letter
            btn.onclick = () => onKey(letter)
            keys[letter] = btn
            div.appendChild(btn)
        })

        keyboard.appendChild(div)
    })
}

export function paintKey(letter, status){
    const key = keys[letter]
    if(!key) return
    key.className = status
}