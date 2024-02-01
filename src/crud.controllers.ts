import { Body, Controller ,Delete,Get,Param,Post, Put} from "@nestjs/common";
import { UsersDTO } from "./dto/users.dto";

// interface Users{
//     id:number,
//     name:string,
//     age:number,
// }

@Controller('/crud')
export class CrudControllers{

    users = []
    @Post('/create')
    crrateUser(@Body() data:UsersDTO){
        data.id= Date.now();
        this.users.push(data)
        return "User Created Successfully."
    }

    @Get('/get/:id')
    getUsers(@Param('id') id){
        let user = this.users.find((user)=> user.id == id)
        if(!user){
            return "User Not Fond"
        }
        return ({data:user,message:"User get successfully."})
    } 
    
    @Get('/get')
    getAllUsers(){
        return ({users:this.users,message:"All users get successfully."})
    } 

    @Put('/update/:id')
    updateUsers(@Param('id') id:number,@Body() data){
        let user = this.users.find((user)=> user.id == id)
        if(!user){
            return "User Not Fond"
        }
        user.name = data.name;
        user.age = data.age

        return "User Updated Successfully."
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id') id:number){
        let user = this.users.find((user)=> user.id == id)
        if(!user){
            return "User Not Fond"
        }
        this.users= this.users.filter((user)=> user.id != id)
        return "User Deleted Successfully."
    }
}