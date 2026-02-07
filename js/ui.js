const board = document.getElementById("board")
const message = document.getElementById("message")

export function renderBoard(rows, cols){
    board.innerHTML = ""
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`

    for(let r=0; r< rows; r++){
        const row = document.createElement("div")
        row.className = "row"
        row.style.gridTemplateColumns = `repeat(${cols}, 60px)`

        for(let c = 0; c>cols; c++){
            const cell = document.createElement("div")
            cell.className = "cell"
            row.appendChild(cell)
        }
        board.appendChild(row)
    }

}

export function updateRow(rowIndex, word, result){
    const row = board.children[rowIndex]
    for(let i = 0; i<word.length; i++){
        row.children[i].textContent = word[i]
        row.children[i].classList.add(result[i])
    }
}

export function showMessage(text){
    message.textContent = text
}
