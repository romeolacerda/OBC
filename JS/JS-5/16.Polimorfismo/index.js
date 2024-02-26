class Vehicle {
    move() {
        console.log("O veiculo esta se movendo. ")
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro está se movendo. ")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("O navio está navegando. ")
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(`A aerpnave esta voando a ${speed} km/h`)
    }
}


const delorean = new Car()

const blackpearl = new Ship()

const epoch = new Aircraft()

// delorean.move()
// blackpearl.move()
// epoch.move(80)

function start(vehicle){
    console.log("Iniciando um veiculo qualquer..")
    vehicle.move()
}

start(delorean)
start(blackpearl)
start(epoch)