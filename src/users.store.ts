import { Injectable } from "@nestjs/common";
import { UsersDTO } from "./dto/users.dto";
@Injectable()
export class UsersStore{
    constructor(){
        console.log("I am in UsersStore ")
    }
    private store = new Map<number,UsersDTO>()

    addUsers(user:UsersDTO){
        this.store.set(user.id,user)
    }

    getUser(id:number){
        return this.store.get(id);
    }

    updateUsers(){
        return Array.from(this.store).map((_,user)=>user)
    }

    deleteUser(id:number){
        this.store.delete(id)
    }
}