import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersControler } from './users.controlers';
import { TestsControler } from './test.controllers';
import { CrudControllers } from './crud.controllers';
import { HostIpSubDomain } from './hostIpSubDomain.controller';
import { UsersStore } from './users.store';
import { TestInjectionController } from './testInjections.controller';
let Toggle = false;
@Module({
  imports: [],
  controllers: [AppController,UsersControler,TestsControler,CrudControllers,HostIpSubDomain,TestInjectionController],
  providers: [AppService,{provide:"USS", useClass : UsersStore} , {provide:'Value',useValue:"This is the String value from module"} ,
  {
    provide:"Array",
    useValue:[{name:"singh",id:1,age:20},{company:"Ongraph",salary:500000}]

  },
  {
    provide:'EVENT_STORE',
    useFactory:(injectedValue:number)=>{
      console.log(Toggle)
      if(Toggle){
        Toggle=false
      }else{
        Toggle = true
      }
      return {Toggle,injectedValue}
    },
    inject:['Inj']
  },
  {
    provide:'Inj',
    useValue:55
  }
],
})
export class AppModule {}
