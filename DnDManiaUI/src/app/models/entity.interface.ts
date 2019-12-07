export interface Entity {
    type: boolean; // true = char, false = enemy;
    name: string;
    healthPoints: number;
    armorClass: number;
    attack: number;
    dmg: number;
    dmgMod: number;
    initiativeMod: number;
    initiative: number;

    initiate(): number;
    combatAction(crit: boolean): number;
}
