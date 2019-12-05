export class Enemy {
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
    ) { }
}
