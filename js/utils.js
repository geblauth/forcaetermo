export function normalizeWord(word){
    return word
    .normaliza("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
}