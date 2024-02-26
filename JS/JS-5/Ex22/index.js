const App =require("./App")

App.createUser("romeo@gmail.com", "romeo")
App.createUser("heitor@gmail.com", "heitor")
App.createUser("jade@gmail.com", "jade")

App.deposit("romeo@gmail.com", 100)

App.transfer("romeo@gmail.com", "heitor@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("jade@gmail.com",2000, 24)

console.log(App.findUser("romeo@gmail.com"))
console.log(App.findUser("romeo@gmail.com").account)
console.log(App.findUser("jade@gmail.com"))
console.log(App.findUser("jade@gmail.com").account)
console.log(App.findUser("heitor@gmail.com"))
console.log(App.findUser("heitor@gmail.com").account)
