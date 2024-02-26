let continuar = "encerrar"

do {
    continuar = prompt("Escolha uma das opções abaixo :\n 1\n 2\n 3\n 4\n encerrar?")
    
    alert(continuar + " você escolheu esta opção")

} while ( continuar !== "encerrar")

alert("Encerrando a sua sessão")