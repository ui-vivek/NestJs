import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb-URL'),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [MongooseModule] 
})
export class DatabaseModule {}