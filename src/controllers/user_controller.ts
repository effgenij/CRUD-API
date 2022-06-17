import { UserDB } from "../models/user_model";

export class Controller {
    constructor(private userDB: UserDB){
        this.userDB = userDB;
    }
}