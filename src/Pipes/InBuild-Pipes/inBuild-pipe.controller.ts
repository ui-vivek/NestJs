import { Controller, Get, Param, ParseIntPipe, UsePipes } from "@nestjs/common";

@Controller('buildin')

export class BuildInPipeController{
    constructor(){}

    @Get()
    getHello(){
        return 'Hello World! from BuildInPipe';
    }

    @Get('parse/:id')
    @UsePipes(ParseIntPipe)
    getParse(@Param('id') id :number){
        console.log("Type of ID is ",typeof(id));
        return `This is a ${id}`;
    }
}