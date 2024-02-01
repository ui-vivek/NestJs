import { Controller, Get, HostParam, Ip } from "@nestjs/common";

@Controller({path:'/host',host:':localhost'})
export class HostIpSubDomain{
    @Get('/gethost')
    getUsers(@HostParam('localhost') params){
        console.log(params)
        let users = {
            name:"Singh",
            id:2
        }
        return users;
    }

    @Get('ip')
    getIp(@Ip() ip){
        console.log(ip)
        return "Ip get successfully"
    }
} 