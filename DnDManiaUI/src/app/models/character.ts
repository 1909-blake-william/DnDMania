import { Entity } from 'src/app/models/entity.interface';

export class Character implements Entity {
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
        public turn = false,
    ) {}

    initiate() {
        let result: number;
        result = Math.ceil(Math.random() * 20) + this.initiativeMod;
        this.initiative = result;
        return result;
    }

    combatAction(crit: boolean) {

        let result: number;
        let dieMult = 1;
        if (crit) {
            dieMult = 2;
        }

        result = Math.ceil(Math.random() * this.dmg) * dieMult + this.dmgMod;

        return result;
    }
}
