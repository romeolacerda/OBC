// Modulos
import calculate from "./calculate.js"
import copyFromClipboard from "./copyToClipBoard.js"
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click' , handleButtonPress)})

document.getElementById('clear').addEventListener('click', handleClear)

document.getElementById('input').addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyFromClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)