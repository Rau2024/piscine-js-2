export const generateLetters = () => {
  const body = document.querySelector("body")
  const total = 120
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < total; i++) {
    const letter = document.createElement("div")
    letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)]
    const size = 11 + ((130 - 11) / (total - 1)) * i
    letter.style.fontSize = `${size}px`
    if (i < total / 3) {
      letter.style.fontWeight = 300
    } else if (i < (2 * total) / 3) {
      letter.style.fontWeight = 400
    } else {
      letter.style.fontWeight = 600
    }
    body.append(letter)
  }
}
