import { Module } from "@nestjs/common";
import { BuildInPipeController } from "./InBuild-Pipes/inBuild-pipe.controller";
import { CustomPipeController } from "./custom-pipes/custom-pipe.controller";

@Module({
    imports: [],
    controllers: [BuildInPipeController,CustomPipeController],
    providers: [],
    exports: []
})

export class BothPipesModule{}