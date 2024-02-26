const amigos = ["romeo", "lukas", "gabi"]

console.log(amigos)

const maisAmigos = [amigos, "maju"]

console.log(maisAmigos)

const f = (...args) => console.log(args[0], args[args.length - 1]) // do console.log saem o primeiro argumento e o segundo argumento

console.log(f("romeo", "maju", "guilherme"))