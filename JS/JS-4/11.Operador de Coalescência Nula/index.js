// Operador Lógico, como E && e OU ||
const a = 0 // false or true

const b = null // false

const c = "Test" // True

console.log(a ?? b ?? c)

console.log(b ?? a)

// O Javascript Avalia as operações da esquerda para a direita ( -> )
// O operador lógico não considera opcões falsiaveis ou falsy, ele ignora null e undefined

let A = 0

let B = A || 42 // Testou o A e viu que era igual a falso

console.log({A, B})

B = A ??  42  //Se o A não tiver nenhum conteudo(null ou undefined) B = 42, se o A tiver algum conteudo B = A

console.log({A, B})