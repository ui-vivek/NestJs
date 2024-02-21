import { Module } from "@nestjs/common";
import { ChildRouterService } from "./childRouter.service";
import { ChildRouterController } from "./childRouter.controller";

@Module({
    imports: [],
    controllers: [ChildRouterController],
    providers: [ChildRouterService],
    exports: []
})
export class ChildRouterModule {}