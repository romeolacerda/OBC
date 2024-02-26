//Session Storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info',input.value)
    input.value = '' 
})

document.getElementById('readSession').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert('A informacao salva é: ' + info)
})

//Local Storage ( setItem para definir qual o item)
document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})
// (get item  para loclizar/ exibir o item)
document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text')
    alert("O texto salvo no local storage é: " + t)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ";"
    const expirattion = 'expires=' + new Date(2024, 11, 11) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expirattion + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    //cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ";"
    const expirattion = 'expires=' + new Date(2024, 11, 11) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expirattion + path
    input.value = ''
    console.log(document.cookie)    
})