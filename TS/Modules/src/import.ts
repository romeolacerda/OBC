import { Spaceship } from "./export";
import * as _ from "lodash";

interface battleSpachechip extends Spaceship {
  weapons: number;
}

let xwing: battleSpachechip = {
  name: "X-wing",
  pilot: "Luke skywalker",
  speed: 50,
  weapons: 2,
};

console.log(_.camelCase(xwing.pilot));
