import { Module } from "@nestjs/common";
import { RouterModuleService } from "./router.service";
import { RouterModuleController } from "./router.controller";
import { ChildRouterModule } from "./Child Route/chileRouter.module";
import { RouterModule } from '@nestjs/core';


@Module({
    imports: [ChildRouterModule],
    // imports: [ChildRouterModule,RouterModule.register([{path: 'child',module: ChildRouterModule}])],
    controllers: [RouterModuleController],
    providers: [RouterModuleService],
    exports: [ChildRouterModule]
})
export class MainRouterModule {}
    