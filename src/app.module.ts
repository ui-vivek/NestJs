import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersControler } from './users.controlers';
import { TestsControler } from './test.controllers';
import { CrudControllers } from './crud.controllers';
import { HostIpSubDomain } from './hostIpSubDomain.controller';
import { UsersStore } from './users.store';
import { TestInjectionController } from './testInjections.controller';
import { UsersService } from './users.service';
import { TestModule } from './Feature Module/feature.module';
import { DatabaseModule } from './Test Mongodb/student.module';
import { RouterModule } from '@nestjs/core';
import { MainRouterModule } from './Router Module/router.module';
import { ChildRouterModule } from './Router Module/Child Route/chileRouter.module';
import { BothPipesModule } from './Pipes/pipe.module';
import { MiddleWareController } from './middleware/middleware-controller.controller';
let Toggle = false;
@Module({
  imports: [
    BothPipesModule,RouterModule.register([{path:'pipes',module:BothPipesModule}]),
    TestModule,
    DatabaseModule,
    MainRouterModule,
    RouterModule.register([
      { path: 'student', module: DatabaseModule },
      { path: 'main', module: MainRouterModule ,children:[{path:'child',module:ChildRouterModule}]},
    ]),
  ],
  controllers: [
    AppController,
    UsersControler,
    TestsControler,
    CrudControllers,
    HostIpSubDomain,
    TestInjectionController,
    MiddleWareController
  ],
  providers: [
    AppService,
    { provide: 'USS', useClass: UsersStore },
    { provide: 'Value', useValue: 'This is the String value from module' },
    {
      provide: 'Array',
      useValue: [
        { name: 'singh', id: 1, age: 20 },
        { company: 'Ongraph', salary: 500000 },
      ],
    },
    {
      provide: 'EVENT_STORE',
      useFactory: (injectedValue: number) => {
        console.log(Toggle);
        if (Toggle) {
          Toggle = false;
        } else {
          Toggle = true;
        }
        return { Toggle, injectedValue };
      },
      inject: ['Inj'],
    },
    {
      provide: 'Inj',
      useValue: [{ name: 'Inj', id: 23, description: 'Hello world' }],
    },
    UsersService,
  ],
})
export class AppModule {}
