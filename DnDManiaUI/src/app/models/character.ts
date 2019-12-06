export class Character {
    constructor(
        id: number,
        Cname: string,
        Cclass: string,
        race: string,
        healthPoints: number,
        armorClass: number,
        initiative: number,
        combatAction = {
            attack: '',
            specialattack: '',
        },
        attack: number,
        level: number,
    ) {}
}
