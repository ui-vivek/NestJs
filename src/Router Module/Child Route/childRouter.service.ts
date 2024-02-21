import { Injectable } from "@nestjs/common";

@Injectable()
export class ChildRouterService{
    constructor(){}

    getHello(){
        return 'Hello World! from ChildRouter';
    }
}