class Character {
    

    constructor(name, hp, attack, defense){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
    }

    doAttack(targetCharacter){ // -> vai passar ela assim atacante(defensor)
        //pontos de vida(defensor) -(ataque(atacante) - defesa(defensor))
        targetCharacter.hp -= this.attack - targetCharacter.defense
    }
}

module.exports = Character
