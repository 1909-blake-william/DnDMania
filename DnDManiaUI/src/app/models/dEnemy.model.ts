import { Entity } from './entity.interface';

export class DEnemy implements Entity {
    constructor(
        public id = 0,
        public name = '',
        public challenge = 0,
        public healthPoints = 0,
        public armorClass = 0,
        public attack = 0,
        public dmg = 0,
        public dmgMod = 0,
        public initiative = 0,
        public initiativeMod = 0,
        public type = false,
    ) { }

    initiate() {
        let result: number;
        result = Math.ceil(Math.random() * 20) + this.initiativeMod;
        this.initiative = result;
        return result;
    }

    combatAction(ac: number) {

        let result: number;
        let dieMult = 1;

        const hitRoll = Math.ceil(Math.random() * 20);

        if (hitRoll === 20) {
            dieMult = 2;
        }

        const hit = hitRoll + this.attack;
        if (hit >= ac) {
            result = Math.ceil(Math.random() * this.dmg) * dieMult + this.dmgMod;
        }

        return result;
    }

}