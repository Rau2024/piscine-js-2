import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = colors.map(c => `.${c} { background: ${c}; }`).join('\n')
  document.head.append(style)
}

export const generateColdShades = () => {
  const body = document.querySelector('body')
  const regex = /(aqua|blue|turquoise|green|cyan|navy|purple)/i
  colors
    .filter(c => regex.test(c))
    .forEach(c => {
      const div = document.createElement('div')
      div.className = c
      div.textContent = c
      div.addEventListener('click', () => choseShade(c))
      body.append(div)
    })
}

export const choseShade = (shade) => {
  const body = document.querySelector('body')
  const divs = body.querySelectorAll('div')
  divs.forEach(div => {
    div.className = shade
  })
}
