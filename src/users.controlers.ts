import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { get } from "http";
@Controller('/users')
export class UsersControler{
    @Get('/profile')
    getProfile(){
        return ({user:"True"})
    }

    @Post('/create')
    createUser(@Body() data , @Res() res){
        // When we use Res() then we have to manualy return/handel the return statement res.status.json()
        // Otherwise Nest will automatically handel the retuen method.
        console.log(data)
        res.status(201).json({ message: 'User Created.' });
    }
}