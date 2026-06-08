import {button, clear, equal, input, switchButton, copy} from "./Calc1.js"
import {inputSet, clearSet, calculate , keySelection, switchTheme, copySelection} from "./Calc2.js"


button.forEach(inputSet)

clear.addEventListener('click', clearSet)

equal.addEventListener('click', calculate)

input.addEventListener('keydown', keySelection)

switchButton.addEventListener('click', switchTheme)

copy.addEventListener('click', copySelection)
