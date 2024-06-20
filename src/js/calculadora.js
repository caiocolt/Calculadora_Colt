var n1 = window.document.querySelector('#num1')
var n2 = window.document.querySelector('#num2')
var resultado = window.document.querySelector('span')

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value)
}

function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value)
}
function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value)
}
function dividir() {
    resultado.innerHTML = Number(n1.value) / Number(n2.value)
}