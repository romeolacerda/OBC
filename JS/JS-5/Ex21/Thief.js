const Character = require("./Character")


class Thief extends Character{

    doAttack(targetCharacter){
        //hp - 2*(ataque(thief) - defesa(defensor))
        targetCharacter.hp -= (this.attack - targetCharacter.defense) * 2
    }
}

module.exports = Thief