import hotkeys from 'hotkeys-js'

const href = document.location.href
const title = document.title
const markdownLink = '[' + title + '](' + href + ')'

const listener = function (e) {
  e.clipboardData.setData('text/plain', markdownLink)
  e.preventDefault()
}

hotkeys('ctrl+alt+e', function (event) {
  event.preventDefault()
  console.log(markdownLink)
  document.addEventListener('copy', listener)
  document.execCommand('copy')
})
