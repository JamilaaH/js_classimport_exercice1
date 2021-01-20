import {Humain} from './humain.js'

class Mage extends Humain {
    constructor(nom,age,magie) {
        super(nom,age);
        this.magie = magie;
    }
}

let perso3 = new Mage('archie', 27, "pouvoir")
console.log(perso3);