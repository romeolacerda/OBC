let nome = prompt("qual seu nome: ")
let sobrenome = prompt("qual seu sobrenome: ")
let campo = prompt("qual seu campo de estudo: ")
let ano = prompt("qual seu ano de nascimento: ")

let idade = 2023 - parseFloat(ano)

alert("Tudo certo? " + nome + " " + sobrenome
+ "\nseu campo é: " + campo +
"\n e voce tem: " + idade + " anos de idade!"
)

