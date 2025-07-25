import { IsString, IsEmail, IsDateString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsDateString()
  hireDate: Date;

  @IsOptional()
  @IsString()
  status?: string;
}