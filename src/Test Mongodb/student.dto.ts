import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class StudentDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    name:string;
    @IsNotEmpty()
    @IsNumber()
    age:number;
}