import { gossips } from './gossip-grid.data.js'

function grid() {
  const container = document.createElement('div')
  container.className = 'grid'
  document.body.appendChild(container)

  const rangesDiv = document.createElement('div')
  rangesDiv.className = 'ranges'

  const widthRange = document.createElement('input')
  widthRange.type = 'range'
  widthRange.className = 'range'
  widthRange.id = 'width'
  widthRange.min = 200
  widthRange.max = 800
  widthRange.value = 200

  const fontSizeRange = document.createElement('input')
  fontSizeRange.type = 'range'
  fontSizeRange.className = 'range'
  fontSizeRange.id = 'fontSize'
  fontSizeRange.min = 20
  fontSizeRange.max = 40
  fontSizeRange.value = 20

  const backgroundRange = document.createElement('input')
  backgroundRange.type = 'range'
  backgroundRange.className = 'range'
  backgroundRange.id = 'background'
  backgroundRange.min = 20
  backgroundRange.max = 75
  backgroundRange.value = 75

  rangesDiv.append(widthRange, fontSizeRange, backgroundRange)
  document.body.insertBefore(rangesDiv, container)

  const form = document.createElement('form')
  form.className = 'gossip'
  const textarea = document.createElement('textarea')
  const button = document.createElement('button')
  button.type = 'submit'
  button.textContent = 'Share gossip!'
  form.append(textarea, button)
  container.appendChild(form)

  const renderGossip = (text) => {
    const div = document.createElement('div')
    div.className = 'gossip'
    div.textContent = text
    container.appendChild(div)
  }

  gossips.forEach(renderGossip)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const val = textarea.value.trim()
    if (val) {
      const div = document.createElement('div')
      div.className = 'gossip'
      div.textContent = val
      container.insertBefore(div, form.nextSibling)
      textarea.value = ''
    }
  })


  const updateStyles = () => {
    const width = widthRange.value + 'px'
    const fontSize = fontSizeRange.value + 'px'
    const lightness = backgroundRange.value + '%'
    document.querySelectorAll('.gossip').forEach((el) => {
      el.style.width = width
      el.style.fontSize = fontSize
      el.style.background = `hsl(280, 50%, ${lightness})`
    })
  }

  widthRange.addEventListener('input', updateStyles)
  fontSizeRange.addEventListener('input', updateStyles)
  backgroundRange.addEventListener('input', updateStyles)

  updateStyles()
}

export { grid }
