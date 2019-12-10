export class Character {
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
        public type: true,
    ) {}
}
