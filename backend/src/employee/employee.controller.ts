import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';

@Controller('employees') // Define a rota base /employees
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      return await this.employeeService.create(createEmployeeDto);
    } catch (error) {
      console.error(error); // Para debug
      throw new InternalServerErrorException('Erro ao criar funcionário.');
    }
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id') // Rota dinâmica para ID
  async findOne(@Param('id') id: string): Promise<Employee> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException(`Funcionário com ID "${id}" não encontrado.`);
    }
    return employee;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const updatedEmployee = await this.employeeService.update(id, updateEmployeeDto);
    if (!updatedEmployee) {
      throw new NotFoundException(`Funcionário com ID "${id}" não encontrado para atualização.`);
    }
    return updatedEmployee;
  }

  @Delete(':id')
  @HttpCode(204) // Retorna 204 No Content para deleção bem-sucedida
  async remove(@Param('id') id: string): Promise<void> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException(`Funcionário com ID "${id}" não encontrado para remoção.`);
    }
    await this.employeeService.remove(id);
  }
}