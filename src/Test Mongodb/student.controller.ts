import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async addStudent(@Body() studentData:StudentDTO) {
    return this.studentService.createStudent(studentData.name, studentData.age);
  }
}
