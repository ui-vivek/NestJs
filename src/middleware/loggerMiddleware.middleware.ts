import { Injectable, NestMiddleware, Next, Req, Res } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
        console.log(req.headers);
        next()
        return ("ok")
    }
}