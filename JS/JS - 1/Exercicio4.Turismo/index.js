const nome = prompt("Qual o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while(continuar == "Sim")
{
    let cidade = prompt("Qual o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt("Você já visitou alguma cidade?")
}

alert(
    nome + " você ja visitou " + contagem + 
    " cidades, essas foram :\n " + cidades
)