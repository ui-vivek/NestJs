import { Controller, Get, Header, Headers, NestMiddleware, Next, Req, Res } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Controller('middleware')
export class MiddleWareController implements NestMiddleware {

    @Get()
    use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
        console.log(req.headers);
        next()
        return ("ok")
    }
}