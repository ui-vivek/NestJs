import { Controller, Get, Param } from "@nestjs/common";

@Controller('custom')
export class CustomPipeController{
    constructor(){}

    @Get()
    getHello(){
        return 'Hello World! from CustomPipe';
    }
}