import {Humain} from './humain.js'

class Archer extends Humain {
    constructor(nom,age,fleche) {
        super(nom,age);
        this.fleche = fleche;
    }
}

let perso = new Archer('archie', 27, "fleche")
console.log(perso);