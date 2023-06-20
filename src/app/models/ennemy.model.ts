import { User } from "./user.model";
import { Weapon } from "./weapon.model";

export class Ennemy {
    constructor(
        public name: string,
        public weaponHolded: Weapon,
        public SlainBy: User[],
        public imgUrl: string,
        public id: number
    ) { }
}