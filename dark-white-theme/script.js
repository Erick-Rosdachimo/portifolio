const btn = document.getElementById('box')
const body = document.getElementById('body')
var num = 1

function operador() {
  if (num == 1) {
    num = num + 1
    body.classList.remove('light')
    body.classList.add('dark')
  } else {
    num = num - 1
    body.classList.remove('dark')
    body.classList.add('light')
  }
}

btn.addEventListener('click', operador)
