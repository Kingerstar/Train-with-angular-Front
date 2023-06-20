import { User } from "./user.model";

export class Weapon {
    constructor(
        public name: string,
        public isBlunt: boolean = false,
        public isSharp: boolean = false,
        public userList: User[],
        public id: number
    ) { }
}