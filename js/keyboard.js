const keyboard = document.getElementById("keyboard")
const keys = {}

const layout = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM"
]

export function initKeyboard(onKey) {
    keyboard.innerHTML = ""

    layout.forEach(row => {
        const div = document.createElement("div")
        div.className = "key-row"

        row.split("").forEach(letter => {
            const btn = document.createElement("button")
            btn.textContent = letter
            btn.onclick = () => onKey(letter)
            keys[letter] = btn
            div.appendChild(btn)
        })

        keyboard.appendChild(div)
    })
}

export function paintKey(letter, status) {
    const key = keys[letter]
    if (!key) return

    if(key.classList.contains("green")) return
    console.log(letter, status, key.className)

    if (status === "green") {
        key.classList.remove("yellow", "gray")
        key.classList.add("green")
        return
    }

    if (status === "yellow") {
        if(!key.classList.contains("green")){
        key.classList.remove("gray")
        key.classList.add("yellow")
        
    }
    return
    }

    if(status == "gray"){
        if(!key.classList.contains("gree") && !key.classList.contains("yellow")){
            key.classList.add("gray")
        }
    }

}