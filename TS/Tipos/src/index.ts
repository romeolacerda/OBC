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

// let planet: Planet;

// let homePlanet: Planet;

// function checkPlanet(planet: Planet) {
//   if (planet === "Terra") {
//     console.log("Estamos na Terra!");
//   }
// }

// type GreetingCallback = (name: string) => void;

// function greet(callbackfn: GreetingCallback) {
//   let name = "Romeo";
//   callbackfn(name);
// }

// 1.Função Principal

type PlanetSituation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

type PlanetCoordinates = [number, number, number, number];

type Planet = {
  name: string;
  coordinates: PlanetCoordinates;
  situation: PlanetSituation;
  satellites: string[];
};
const planets: Planet[] = []; // const planets = [];

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

function addPlanet(
  name: string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation
) {
  planets.push({
    name,
    coordinates,
    situation,
    satellites: [],
  });

  console.log(`Planeta ${name} foi registrado com sucesso!`);
}

//função para achar planetas / para achar um elemento em um array(pode ser objeto, string e etc)
function findPlanet(name: string) {
  const planet = planets.find((planet) => planet.name === name);

  // Utilizando o operador nullish coalescing podemos
  // garantir que nosso retorno será um tipo Union
  return planet ?? false;
}

// 2. Atualiza a situação de um determinado planeta

function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation;

  alert(`A situação do planeta ${name} foi atualizada para ${situation}`);
}

// function updateSituation(name: string, id: number, condition: Situation) {
//   planets[id].condition = condition;

//   console.log(`The situation of planet ${name} has change`);
// }

// // 3. Adiciona um Satelite a um determinado Planeta
function addSatilite(name: string, planet: Planet) {
  planet.satellites.push(name);

  alert(`O satelite ${name} fo adicionado ao planeta ${planet.name}`);
}

// function addSatilite(name: string, id: number, satalite: string) {
//   planets[id].satelites.push(satalite);

//   console.log(`O satelite ${satalite} foi adicionado ao planeta ${name}`);
// }

//3.Remover um satelite de um determinado planeta
function removeSatellite(name: string, planet: Planet) {
  planet.satellites = planet.satellites.filter(
    (satellite) => satellite !== name
  ); //Atualizando o Array para um novo sem o satelite escolhido para ser removido

  alert(`O satelite ${name} foi removido do planeta ${planet.name}`);
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
  let situation: PlanetSituation;
  let validSituation = false;

  while (!validSituation) {
    const situationInput = prompt(
      "Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado"
    );

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
function promptValidPlanet(callbackfn: (planet: Planet) => void) {
  // Essa função de callbacl vai nos dizer o que fazer com o planeta uma vez que esse planeta seja valido
  const planetName = prompt("Informe o nome do planeta:");
  const planet = findPlanet(planetName);

  if (planet) {
    callbackfn(planet);
  } else {
    alert("Planeta não encontrado! Retornando ao Menu...");
  }
}

///////*Menu da aplicação
// 1 parte do Menu
function firstMenuOption() {
  const name = prompt("Informe o nome do planeta:");
  const coordinateA = Number(prompt("Informe a primeira coordenada:"));
  const coordinateB = Number(prompt("Informe a segunda coordenada:"));
  const coordinateC = Number(prompt("Informe a terceira coordenada:"));
  const coordinateD = Number(prompt("Informe a quarta coordenada:"));

  // Aqui a nossa função ajuda a ter um código mais organizado
  const situation = promptValidSituation();

  const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`);

  if (confirmation) {
    addPlanet(
      name,
      [coordinateA, coordinateB, coordinateC, coordinateD],
      situation
    );
  }
}

// 2 parte de menu
function secondMenuOption() {
  promptValidPlanet((planet) => {
    const situation = promptValidSituation();
    updateSituation(situation, planet);
  });
}

//3 parte do Menu
function thirdMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Informe o nome do satelite: ");
    addSatilite(satellite, planet);
  });
}

//4 parte do Menu
function fourthMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Informe o nome do satelite a ser removido:");
    removeSatellite(satellite, planet);
  });
}

//5 parte do menu
function fifthMenuOption() {
  let list = "Planetas:\n";

  planets.forEach((planet) => {
    const [a, b, c, d] = planet.coordinates;

    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satelites: ${planet.satellites.length}
    `;

    planet.satellites.forEach((satellite) => {
      list += `          - ${satellite}\n`;
    });
  });

  alert(list);
}

// Menu

let userOption = 0;

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;

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
