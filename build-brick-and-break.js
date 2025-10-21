export const build = (n) => {
  const body = document.querySelector("body")
  let i = 1
  const interval = setInterval(() => {
    if (i > n) {
      clearInterval(interval)
      return
    }
    const brick = document.createElement("div")
    brick.id = `brick-${i}`
    if (i % 3 === 2) {
      brick.dataset.foundation = "true"
    }
    body.append(brick)
    i++
  }, 100)
}

export const repair = (...ids) => {
  ids.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (el.dataset.foundation === "true") {
      el.dataset.repaired = "in progress"
    } else {
      el.dataset.repaired = "true"
    }
  })
}

export const destroy = () => {
  const bricks = document.querySelectorAll("div[id^='brick-']")
  if (bricks.length === 0) return
  bricks[bricks.length - 1].remove()
}
