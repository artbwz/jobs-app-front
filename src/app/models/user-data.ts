import { RUser } from "./user-models";

export class User {

    idUser? : number;
    name: string;
    email: string;
    password: string;


    constructor(data?: RUser){
        if (typeof data === 'undefined' || data === null)
        return;
    
        this.idUser = data.idUser;
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    }
}

