import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])], // Registra a entidade neste módulo
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}