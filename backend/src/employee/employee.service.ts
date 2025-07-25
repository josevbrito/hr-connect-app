// src/employee/employee.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  // Cria um novo funcionário
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(newEmployee);
  }

  // Lista todos os funcionários
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // Encontra um funcionário por ID
  async findOne(id: string): Promise<Employee | null> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  // Atualiza um funcionário existente
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee | null> {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return this.employeeRepository.findOne({ where: { id } });
  }

  // Deleta um funcionário
  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}