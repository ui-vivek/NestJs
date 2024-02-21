import { Injectable } from "@nestjs/common";

@Injectable()
export class RouterModuleService {
    constructor() { }

    getHello(): string {
        return 'Hello World! from RouterModule Main';
    }
}