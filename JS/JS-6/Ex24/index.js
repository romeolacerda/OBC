// Function para o IMC
function imc (peso, altura) {
    return new Promise((resolve, reject) => {
        if(typeof peso !== 'number' || typeof altura !== 'number') reject('arguments must be of type number')
        else resolve(peso / (altura * altura))
    })
    
} 

// Faunction para Executar o IMC(GUI)
function showImc(peso, altura){
    imc(peso,altura).then((result) => {
        console.log(`O resultado do imc foi ${result}`)

        if(result < 18.5) console.log("Situação: MAGREZA")
        else if(result < 25) console.log("Situação: Normal")
        else if(result < 30) console.log("Situação: Sobrepeso")
        else if(result < 40) console.log("Situação: Obesidade")
        else console.log("Situação de Obesidade")
    }).catch((err) => {
        console.log(err)
    })

    console.log("calculando")
}

showImc(71, 1.74)