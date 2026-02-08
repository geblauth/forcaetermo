function getBoard() {
    return document.getElementById("board")
}
const message = document.getElementById("message")

export function renderBoard(rows, cols) {
    const board = getBoard()
    board.innerHTML = ""
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`

    for (let r = 0; r < rows; r++) {
        const row = document.createElement("div")
        row.className = "row"
        row.style.gridTemplateColumns = `repeat(${cols}, 60px)`

        for (let c = 0; c > cols; c++) {
            const cell = document.createElement("div")
            cell.className = "cell"
            row.appendChild(cell)
        }
        board.appendChild(row)
    }

}

export function updateRow(rowIndex, word, result) {
    const board = getBoard()

    const row = board.children[rowIndex]
    if (!row) return

    const cells = row.children


    console.log("Row:", row)
    for (let i = 0; i < cells.length; i++) {

        cells[i].textContent = word[i] || ""
        cells[i].className = "cell"
        if (result[i]) {
            cells[i].classList.add(result[i])
        }
    }
}

export function showMessage(text) {
    message.textContent = text
}
