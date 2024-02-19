import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './student.schema'; 

@Injectable() 
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student> ) {}

  DataBase = "student";
  async createStudent(name: string, age: number): Promise<Student> {
    const newStudent = new this.studentModel({ name, age });
    return newStudent.save();
  }
}
