//dados do Atacante 
const atacante = prompt("Qual o nome do atacante?")
const ataque = parseFloat(prompt("Quantos pontos de ataque ele possui?"))

//dados do Defensor
const defensor = prompt("Qual o nome do defensor?")
let  vida = parseFloat(prompt("quantos pontos de vida ele possui?"))
const defesa = parseFloat(prompt(("Quantos pontos de defesa ele possui?")))
const escudo = prompt("Possui escudo?")


// calculo de dano
let danoCausado = 0

if(ataque > defesa && escudo === "Não") {
    danoCausado = ataque - defesa
} else if(ataque > defesa && escudo === "Sim")  {
    danoCausado = (ataque - defesa) / 2
}

vida -= danoCausado

alert( atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert (
    defensor + " ficou com " + vida + " pontos de vida"
)



