const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'Ola mundo!' : ''

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'text', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.Disabled)
})

document.getElementById('enable').addEventListener('click', function () {
    input.Disabled= true
})

document.getElementById('data').addEventListener('click', function (){
    const data = input.dataset.something
    console.log("o valor do atributo dara é: " + data)
    input.dataset.something = "algum outro valor"
    console.log("o valor do atributo dara é: " + input.dataset.somethingElse)
})