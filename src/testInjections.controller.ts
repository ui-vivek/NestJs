import { Controller, Get, Inject } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller('/injection')
export class TestInjectionController{
    arrayData:any;
    constructor( @Inject('USS') private UsersStore:UsersStore, @Inject('Value') private value:string , @Inject('Array') private array, @Inject('EVENT_STORE') private EVENT_STORE :any){
        console.log(UsersStore);
        this.arrayData=array
        console.log("I am running from TestInjectionController Controller using Injection method.")
    }
    @Get('/get/all')
    getArrayData(){
        return this.arrayData
    }

    @Get('/get/toggle')
    getToggle(){

        return this.EVENT_STORE
    }
}