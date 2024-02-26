function Log() {
  return function (target: any, key: any, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("---------------------------------");
      console.log(
        `Chamando do metodo ${key} com os parametros: ${JSON.stringify(args)}`
      );
      const result = originalMethod.apply(this, args);
      console.log(
        `O Metodo ${key} retornou o valor: ${JSON.stringify(result)}`
      );
      console.log("---------------------------------");

      return result;
    };
  };
}

class Planet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log()
  calculate(value: number) {
    console.log(`Calculando ${value} vezes 2`);
    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

const planet = new Planet("Terra");

const result = planet.calculate(5);

console.log(`Resulta: ${result}`);

planet.invertName();
