const medida = parseFloat(prompt("qual sua medida em metros(m)?"))
const para = prompt("para qual medida você que converter? ")

switch (para) {
    case "mm":
        alert("o resultado é " + medida * 1000)
        break
    case "cm":
        alert("o resultado é " + medida * 100)
        break
    case "dm":
        alert("o resultdo é " + medida * 10)
        break
    case "dam":
        alert("o resultdo é " + medida * 0.1)
        break
    case "hm":
        alert("o resultdo é " + medida * 0.01)
        break
    case "km":
        alert("o resultdo é " + medida * 0.001)
        break
    default:
        alert("Opção invalida")
}