import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@Schema() 
export class Student {
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNumber()
  @Min(2)
  @IsNotEmpty()
  age: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student); 
