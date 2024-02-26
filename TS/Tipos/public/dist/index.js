// type Planet =
//   | "Mercúrio"
//   | "Vênus"
//   | "Terra"
//   | "Marte"
//   | "Júpiter"
//   | "Saturno"
//   | "Urano"
//   | "Netuno"
//   | "Plutão";
var planets = []; // const planets = [];
// function savePlanet(
//   name: string,
//   coordenadas: [number, number, number, number],
//   condition: Situation,
//   satelites: string[]
// ) {
//   let id = planets.length;
//   const planet = {
//     id,
//     name,
//     coordenadas,
//     condition,
//     satelites,
//   };
//   planets.push(planet);
//   console.log("Planeta Registrado");
// }
function addPlanet(name, coordinates, situation) {
    planets.push({
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellites: [],
    });
    console.log("Planeta ".concat(name, " foi registrado com sucesso!"));
}
//função para achar planetas / para achar um elemento em um array(pode ser objeto, string e etc)
function findPlanet(name) {
    var planet = planets.find(function (planet) { return planet.name === name; });
    // Utilizando o operador nullish coalescing podemos
    // garantir que nosso retorno será um tipo Union
    return planet !== null && planet !== void 0 ? planet : false;
}
// 2. Atualiza a situação de um determinado planeta
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert("A situa\u00E7\u00E3o do planeta ".concat(name, " foi atualizada para ").concat(situation));
}
// function updateSituation(name: string, id: number, condition: Situation) {
//   planets[id].condition = condition;
//   console.log(`The situation of planet ${name} has change`);
// }
// // 3. Adiciona um Satelite a um determinado Planeta
function addSatilite(name, planet) {
    planet.satellites.push(name);
    alert("O satelite ".concat(name, " fo adicionado ao planeta ").concat(planet.name));
}
// function addSatilite(name: string, id: number, satalite: string) {
//   planets[id].satelites.push(satalite);
//   console.log(`O satelite ${satalite} foi adicionado ao planeta ${name}`);
// }
//3.Remover um satelite de um determinado planeta
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(function (satellite) { return satellite !== name; }); //Atualizando o Array para um novo sem o satelite escolhido para ser removido
    alert("O satelite ".concat(name, " foi removido do planeta ").concat(planet.name));
}
// function rmSatilite(
//   name: string,
//   id: number,
//   satalite: string,
//   idSatalite: number
// ) {
//   planets[id].satelites[idSatalite].remove();
//   console.log(`O satelite ${satalite} foi removido do planeta ${name}`);
// }
// * Verificar se a situação que o usuario colocou é verdadeira
function promptValidSituation() {
    var situation;
    var validSituation = false;
    while (!validSituation) {
        var situationInput = prompt("Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado");
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação invalida");
                break;
        }
    }
    return situation;
}
//* Verficar se o usuario colocou um planeta valido
function promptValidPlanet(callbackfn) {
    // Essa função de callbacl vai nos dizer o que fazer com o planeta uma vez que esse planeta seja valido
    var planetName = prompt("Informe o nome do planeta:");
    var planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("Planeta não encontrado! Retornando ao Menu...");
    }
}
///////*Menu da aplicação
// 1 parte do Menu
function firstMenuOption() {
    var name = prompt("Informe o nome do planeta:");
    var coordinateA = Number(prompt("Informe a primeira coordenada:"));
    var coordinateB = Number(prompt("Informe a segunda coordenada:"));
    var coordinateC = Number(prompt("Informe a terceira coordenada:"));
    var coordinateD = Number(prompt("Informe a quarta coordenada:"));
    // Aqui a nossa função ajuda a ter um código mais organizado
    var situation = promptValidSituation();
    var confirmation = confirm("Confirma o registro do planeta ".concat(name, "?\n  Coordenadas: (").concat(coordinateA, ", ").concat(coordinateB, ", ").concat(coordinateC, ", ").concat(coordinateD, ")\n  Situa\u00E7\u00E3o: ").concat(situation));
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
// 2 parte de menu
function secondMenuOption() {
    promptValidPlanet(function (planet) {
        var situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
//3 parte do Menu
function thirdMenuOption() {
    promptValidPlanet(function (planet) {
        var satellite = prompt("Informe o nome do satelite: ");
        addSatilite(satellite, planet);
    });
}
//4 parte do Menu
function fourthMenuOption() {
    promptValidPlanet(function (planet) {
        var satellite = prompt("Informe o nome do satelite a ser removido:");
        removeSatellite(satellite, planet);
    });
}
//5 parte do menu
function fifthMenuOption() {
    var list = "Planetas:\n";
    planets.forEach(function (planet) {
        var _a = planet.coordinates, a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        list += "\n      Nome: ".concat(planet.name, "\n      Coordenadas: (").concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")\n      Situa\u00E7\u00E3o: ").concat(planet.situation, "\n      Satelites: ").concat(planet.satellites.length, "\n    ");
        planet.satellites.forEach(function (satellite) {
            list += "          - ".concat(satellite, "\n");
        });
    });
    alert(list);
}
// Menu
var userOption = 0;
while (userOption !== 6) {
    var menu = "Menu\n    1 - Registrar um novo planeta\n    2 - Atualizar situa\u00E7\u00E3o do planeta\n    3 - Adicionar um sat\u00E9lite ao planeta\n    4 - Remover um sat\u00E9lite do planeta\n    5 - Lista todos os planetas\n    6 - Sair\n  ";
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert("Encerrando o sistema...");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
