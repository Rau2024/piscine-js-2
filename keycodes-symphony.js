export const compose = () => {
  const body = document.querySelector("body")

  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      const notes = body.querySelectorAll(".note")
      if (notes.length > 0) {
        notes[notes.length - 1].remove()
      }
    } else if (e.key === "Escape") {
      body.querySelectorAll(".note").forEach((n) => n.remove())
    } else if (/^[a-z]$/.test(e.key)) {
      const note = document.createElement("div")
      note.className = "note"
      note.textContent = e.key
      const colorHue = (e.key.charCodeAt(0) - 97) * (360 / 26)
      note.style.backgroundColor = `hsl(${colorHue}, 70%, 50%)`
      body.append(note)
    }
  })
}
