import { styles } from './pimp-my-style.data.js'

let index = 0
let removing = false

export const pimp = () => {
  const btn = document.querySelector('.button')

  if (!removing) {
    btn.classList.remove('unpimp')
    btn.classList.add(styles[index])
    index++
    if (index === styles.length) {
      removing = true
      btn.classList.add('unpimp')
    }
  } else {
    index--
    btn.classList.remove(styles[index])
    if (index === 0) {
      removing = false
      btn.classList.remove('unpimp')
    }
  }
}
