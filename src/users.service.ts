import { Delete, Get, Injectable, Post, Put } from "@nestjs/common";
import { UsersDTO } from "./dto/users.dto";

@Injectable()
export class UsersService{
    users=[]
    createUsers(userData:UsersDTO){
        if(!userData.age || !userData.age)
            return ({status:404,data:{},message:"Please give all details."})
        this.users.push(userData)
        return ({status:201,data:{},message:"User Created."})
    }

    getAllUsers(){
        return ({status:201,data:this.users,message:"Get all users successfully."})
    }

    getSingleUser(id:number){
        let user = this.users.find((user)=> user.id == id)
        if(!user)
            return ({status:201,data:{},message:"User not found!"})
        return ({status:201,data:user,message:"Get user successfully."});
    }

    updateUser(id:number,userData:UsersDTO){
        let user = this.users.find((user)=> user.id == id);
        if(!user)
            return ({status:201,data:{},message:"User not found!"}) 
        user.name = userData.name;
        user.age = userData.age;
        return ({status:201,data:{},message:"User updates successfully."})
    }

    deleteUser(id:number){
        let user = this.users.find((user)=> user.id == id);
        if(!user)
            return ({status:201,data:{},message:"User not found!"}) 

        this.users = this.users.filter((user)=> user.id != id);
        return ({status:201,data:{},message:"User deleted successfully."})
    }
}