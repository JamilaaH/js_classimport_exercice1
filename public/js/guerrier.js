import {Humain} from './humain.js'

class Guerrier extends Humain {
    constructor(nom,age,force,vie) {
        super(nom,age);
        this.force = force;
        this.vie = vie;
    }
}

let perso2 = new Guerrier("gor", 27, "force", 90)
console.log(perso2);