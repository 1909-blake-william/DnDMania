import { Entity } from './entity.interface';

export class DChar implements Entity {
    constructor(
        public name: string,
        public className: string,
        public race: string,
        public healthPoints: number,
        public armorClass: number,
        public initiative: number,
        public initiativeMod: number,
        public attack: number,
        public dmg: number,
        public dmgMod: number,
        public level: number,
        public special: number,
        public type = true,
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
            if (!this.special) {
                this.special = 1;
            } else if (this.special === 3) {
                result = (Math.ceil(Math.random() * this.dmg) * dieMult + this.dmgMod) * 2;
            } else {
                this.special++;
                result = Math.ceil(Math.random() * this.dmg) * dieMult + this.dmgMod;
            }
        }

        return result;
    }

}