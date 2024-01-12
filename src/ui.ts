import './ui.css'

function main() {
    parent.postMessage({ msg: { 'hello' } }, '*')
}

window.addEventListener('load', main);