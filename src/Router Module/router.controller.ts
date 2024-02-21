import { Controller, Get } from "@nestjs/common";
import { RouterModuleService } from "./router.service";

@Controller('')

export class RouterModuleController{
    constructor(private _service:RouterModuleService){}

    @Get()
    mainController(){
       return this._service.getHello();
    }
}
