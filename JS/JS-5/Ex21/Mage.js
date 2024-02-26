const Character = require("./Character")

class Mage extends Character{
    constructor(name, hp, attack, defense, mp){
        super(name, hp, attack, defense)
        this.mp = mp
    }

    doAttack(targetCharacter){
        targetCharacter.hp -=((this.mp + this.attack) - targetCharacter.defense)
    }

    heal(targetCharacter){
        targetCharacter.hp += this.mp + 2
    }
}

module.exports = Mage
