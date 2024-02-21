import { Controller, Get, Inject } from "@nestjs/common";
import { ChildRouterService } from "./childRouter.service";

@Controller('')
export class ChildRouterController { 
    constructor( private _childservice:ChildRouterService){}
    @Get()
    getChild(){
        return this._childservice.getHello()
    }
}