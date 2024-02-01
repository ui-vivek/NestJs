import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersControler } from './users.controlers';
import { TestsControler } from './test.controllers';
import { CrudControllers } from './crud.controllers';
import { HostIpSubDomain } from './hostIpSubDomain.controller';

@Module({
  imports: [],
  controllers: [AppController,UsersControler,TestsControler,CrudControllers,HostIpSubDomain],
  providers: [AppService],
})
export class AppModule {}
