export const getArchitects = () => {
  const root =
    document.getElementById("container") ||
    document.getElementById("people") ||
    document.getElementById("characters") ||
    document.querySelector(".people, .characters, main") ||
    document.body
  const kids = Array.from(root.children)
  const architects = kids.filter((el) => el.tagName.toLowerCase() === "a")
  const nonArchitects = kids.filter((el) => el.tagName.toLowerCase() !== "a")
  return [architects, nonArchitects]
}

export const getClassical = () => {
  const [architects] = getArchitects()
  const classical = architects.filter((el) => el.classList.contains("classical"))
  const nonClassical = architects.filter((el) => !el.classList.contains("classical"))
  return [classical, nonClassical]
}

export const getActive = () => {
  const [classical] = getClassical()
  const active = classical.filter((el) => el.classList.contains("active"))
  const inactive = classical.filter((el) => !el.classList.contains("active"))
  return [active, inactive]
}

export const getBonannoPisano = () => {
  const [active] = getActive()
  const target = document.getElementById("BonannoPisano") || null
  const remaining = active.filter((el) => el !== target)
  return [target, remaining]
}
