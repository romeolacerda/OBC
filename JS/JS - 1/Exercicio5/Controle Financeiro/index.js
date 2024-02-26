let saldo = parseFloat(prompt("Qual o seu saldo?"))

do {
    conta = prompt("Você tem : " + saldo + " na sua conta.\n Como deseja proseguir? \nDepositar \nSacar \nSair")
    switch (conta)
    {
        case "Depositar" :
            saldo += parseFloat(prompt("Quanto você quer depositar?"))
            break
        case "Sacar" :
            saldo -= parseFloat(prompt("Quanto você quer depositar?"))
            break
    }
} while (conta != "Sair")

alert("Você esta saindo . . .")
