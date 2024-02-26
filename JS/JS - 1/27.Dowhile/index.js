let velocidade = 0
// O bloco é executado pelo menos uma vez, para depois passar pela condição
do {
    alert("A velocidade do veiculo é "  + velocidade + " km/h")
    velocidade -= 20
} while (velocidade > 0)

alert("velocidade final: " + velocidade + " km/h")