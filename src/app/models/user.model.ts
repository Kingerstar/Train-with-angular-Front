import { Ennemy } from "./ennemy.model";
import { Weapon } from "./weapon.model";

export class User {
    constructor
        (
            public name: string,
            public favoriteGame: string,
            public weaponList: Weapon[],
            public ennemiesSlain: Ennemy[],
            public id: number

        ) { }
}
