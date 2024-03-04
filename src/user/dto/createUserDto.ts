import { Types } from 'mongoose';
import { Parent } from 'src/schemas/User.schema';
import {  IsDate, IsDateString, IsNotEmpty, IsString, MinDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
  phone?: string;
  email?: string;
  password?: string;

  @IsNotEmpty()
  code?: string;
  photo?: string;
  fullName?: string;

  @IsNotEmpty()
  gender?: number;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  dateOfBirth?: Date;
  father?: Parent;
  mother?: Parent;
  nationality?: Record<string, any>;
  disability?: Record<string, any>;
  lang?: string;
  groupType?: number;
  teacherGroup?: any;
  teacherDegree?: any;
  teacherDegreeGroup?: any;
  teacherIdentityNumber?: string;
  teacherOfficialNumber?: string;
  teachingStarted?: Date;
  teachingActive?: boolean;
  teachingStatus?: boolean;
  relative?: Types.ObjectId[];
}
