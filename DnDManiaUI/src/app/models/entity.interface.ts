export interface Entity {
    name: string;
    healthPoints: number;
    armorClass: number;
    attack: number;
    dmg: number;
    dmgMod: number;
    initiativeMod: number;
    initiative: number;

    initiate(): number;
    combatAction(ac: number): number;
}
