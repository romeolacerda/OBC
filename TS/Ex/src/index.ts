// a storage to spaceships
const spaceships = []

// to create new spaceships
function addSpaceship(name: string, pilot: string, crewLimit: number){
    const spaceship ={
        name, 
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    spaceships.push(spaceship)

    alert(`A nace ${spaceship.name} foi registrada`)
}

// to locate spaceships through name
function findSpaceship(name: string){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)

    return spaceship
}

// to add a member in one spaceship crew
function addCrewMember(member:string, spaceship: {name: string, crewLimit: number, crew: string[]}){
    if(spaceship.crew.length>= spaceship.crewLimit) alert(`${member} não pode ser adicionado. Limite atingido.`)
    else{
        spaceship.crew.push(member)

        alert(`${member} foi adicionado a tripulação de ${spaceship.name}`)
    } 
}

//send space ship to mission
function sendInMission(spaceship:{name:string, crewLimit: number, crew: string[], inMission: boolean}){
    if(spaceship.inMission){
        alert(`${spaceship.name} is in mission already`)
    } else if(spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)){
        alert(`${spaceship.name} cannot be shipped because crew isn't enogh`)
    } else {
        spaceship.inMission = true

        alert(`${spaceship.name} shipped to mission`)
    }
}

//first Menu: add a spaceship data input from user and push spaceship to array spaceships
function firstMenuOption(){
    const name = prompt(`which is the name of the spaceship to be registred?`)
    const pilot = prompt(`which is the name of ${name} captain?`)
    const crewLimit = Number(prompt(`How many members is the limit for the crew of ${name}`))

    const confirmation = confirm(`Do you confirm the follow spaceship data?\n${name}: \nPilot: ${pilot} \nCrew Limit: ${crewLimit}`)

    if(confirmation){
        addSpaceship(name, pilot, crewLimit)
    }
}

//second menu option: add member to the spaceship crew
function secondMenuOption(){
    const member = prompt(`What is the name of the member?`)
    const spaceshipName = prompt(`To which spaceship ${member} should go?`)

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirm including ${member} in ${spaceship.name} crew?`)

        if(confirmation){
            addCrewMember(member, spaceship)
        }
    }
}

//Third menu Option
function thirdMenuOption(){
    const spaceshipName = prompt('What is the name of the spaceship to be shipped?')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirm the shipping of the ${spaceship.name} into mission?`)

        if(confirmation){
            sendInMission(spaceship)
        }
    }
}

//Fourth Menu Option
function fouthMenuOption(){
    let list = 'Nave Registradas: \n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
            Spaceship: ${spaceship.name}
            Pilot: ${spaceship.pilot}
            In mission? ${spaceship.inMission ? 'Yes' : 'No' }
            Crew Maximum Limit: ${spaceship.crewLimit}
            Crew: ${spaceship.crew.length}
        `

        spaceship.crew.forEach(member => {
            list += `      -${member}\n`
        })
    })

    alert(list)
}

let userOption = 0

while(userOption !== 5){
    const menu = `Menu Options
    1 - Registrar uma nova nave
    2 - Adicionar um novo membro da tripulação
    3 - Enviar nava em missão
    4 - Listar naves Registradas
    5 - Encerrar
    `

    userOption = Number(prompt(menu))

    switch (userOption) {
        case 1:
            firstMenuOption()
            break;
        case 2:
            secondMenuOption()
            break
        case 3:
            thirdMenuOption()
            break
        case 4: 
            fouthMenuOption()
            break
        case 5:
            alert('Encerrando o sistema')
            break
        default:
            alert('invalid option')
            break;
    }
}