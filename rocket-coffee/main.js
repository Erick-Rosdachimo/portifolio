const header = document.querySelector('header')
const toggle = document.querySelectorAll('header img.toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    header.classList.toggle('show')
  })
}
