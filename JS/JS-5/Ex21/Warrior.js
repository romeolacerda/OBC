const Character =require("./Character")

class Warrior extends Character{
    constructor(name, hp, attack, defense, shild){
        super(name, hp, attack, defense)
        this.shild = shild
        this.stance = 'attacking'
    }

    doAttack(targetCharacter) {
        if (this.stance === 'attacking') {
            super.doAttack(targetCharacter)
        }
    }

    switchStance(){
        if (this.stance === 'attacking'){
            this.stance = 'defending'
            this.defense += this.shild
        } return this.stance = 'attacking'
    }
}

module.exports = Warrior