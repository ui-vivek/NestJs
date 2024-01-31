import { Body, Controller, Get, Post, Res,Put, Param ,Header, Redirect, Query , Headers} from "@nestjs/common";
@Controller('/test')
export class TestsControler{
    token = Date.now()
    //Post method 
    //Header
    @Post('/')
    @Header('Cache-Control','singh') //Setting header
    settHeader(@Body() data , @Res() res){
        return res.status(201).json({status:true,data:data,message:"Profile Created Successfully."})
    }
    //Headers
    @Get('/getheader')
    getHeaders(@Headers() headers){
        console.log(headers)
        return "Headers got successfully."
    }
    //Put method
    //Param
    @Put('/:id')
    updateProfile(@Param('id') id: number, @Body() data, @Res() res) {
        interface User{
            id:number,
            username:string,
            email:string
        }
        const users: User[] = [
            { id: 1, username: 'user1', email: 'user1@example.com' },
            { id: 2, username: 'user2', email: 'user2@example.com' },
            { id: 3, username: 'user3', email: 'user3@example.com' },
            { id: 4, username: 'user4', email: 'user4@example.com' },
            { id: 5, username: 'user5', email: 'user5@example.com' },
        ];
        if(id > users.length || id < 0){
             return res.json({Message : "User not fond !"})
        }
        let user = users[id-1]
        let username = user.username
        return res.status(201).json(`${user.username} is updated successfully.`)
    }
    //Redirect Method
    //Static redirection
    @Redirect('/test/firsturl')
    @Post('/redirection/static')
    staticRedirection(){
        return "Redirected to First Url" //This return statemant will not work.
    }
    //Dynamic redirection url
    @Post('/redirect/:id')
    @Redirect()
    redirectUrl(@Param('id') id:number ,@Body() data){
        if(id%2 == 0){
            return {
                url:'/test/firsturl',
                status:201
            }
        }else{
            return {
                url:'/test/second',
                status:201
            }
        }
    }

    @Get('/firsturl')
    redirectFirst(){
        return "Successfully Redirected To First Url"
    }
    @Get('/second')
    redirectScond(){
        return "Successfully Redirected To Second Url"
    }
    //Multiples Params
    @Post('/multiples/:id/:idd')
    multipleParams(@Param() params:any){
        console.log(params)
    }
    //Query
    @Post('/query')
    Query(@Query() query){
        //http://localhost:3000/test/query?name=singh&id=5&age=10
        console.log(query)
        console.log(query.name)
    }
}