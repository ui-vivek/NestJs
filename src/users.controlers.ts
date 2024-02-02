import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "./dto/users.dto";
@Controller('/users')
export class UsersControler{
    constructor(private userservice : UsersService){}

    @Post('/create')
    createUser(@Body() userData:UsersDTO){
        userData.id = Date.now()
        let res = this.userservice.createUsers(userData);
        return res;
    }

    @Get('/get/all')
    getAllUsers(){
        let res = this.userservice.getAllUsers();
        return res;
    }

    @Get('/get/:id')
    getSingleUser(@Param('id') id:number){
        return this.userservice.getSingleUser(id);
    }

    @Put('update/:id')
    updateUser(@Param('id') id:number,@Body() userData:UsersDTO){
        if(!userData || !id){
            return ({status:404,data:{},message:"Please enter user details."})
        }
        return this.userservice.updateUser(id,userData)
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id') id :number){
        return this.userservice.deleteUser(id)
    }
}