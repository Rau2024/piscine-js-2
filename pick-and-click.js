function pick() {
  const hslDiv = document.createElement("div")
  hslDiv.className = "hsl"
  document.body.appendChild(hslDiv)

  const hueDiv = document.createElement("div")
  hueDiv.className = "hue"
  document.body.appendChild(hueDiv)

  const lumDiv = document.createElement("div")
  lumDiv.className = "luminosity"
  document.body.appendChild(lumDiv)

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("class", "crosshair")
  svg.setAttribute("width", "100%")
  svg.setAttribute("height", "100%")
  svg.style.position = "absolute"
  svg.style.top = "0"
  svg.style.left = "0"
  svg.style.pointerEvents = "none"

  const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line")
  lineX.setAttribute("id", "axisX")
  lineX.setAttribute("y1", "0")
  lineX.setAttribute("y2", window.innerHeight)
  lineX.setAttribute("stroke", "black")
  lineX.setAttribute("stroke-width", "1")
  svg.appendChild(lineX)

  const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line")
  lineY.setAttribute("id", "axisY")
  lineY.setAttribute("x1", "0")
  lineY.setAttribute("x2", window.innerWidth)
  lineY.setAttribute("stroke", "black")
  lineY.setAttribute("stroke-width", "1")
  svg.appendChild(lineY)

  document.body.appendChild(svg)

  document.addEventListener("mousemove", (e) => {
    const hue = Math.round((e.clientX / window.innerWidth) * 360)
    const lum = Math.round((e.clientY / window.innerHeight) * 100)
    const hslVal = `hsl(${hue}, 50%, ${lum}%)`

    document.body.style.background = hslVal
    hslDiv.textContent = hslVal
    hueDiv.textContent = hue
    lumDiv.textContent = lum

    lineX.setAttribute("x1", e.clientX)
    lineX.setAttribute("x2", e.clientX)
    lineY.setAttribute("y1", e.clientY)
    lineY.setAttribute("y2", e.clientY)
  })

  document.addEventListener("click", () => {
    const text = hslDiv.textContent
    navigator.clipboard.writeText(text)
  })
}

export { pick }
