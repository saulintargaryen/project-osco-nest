import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  private employees: CreateEmployeeDto []= [
  {
    id: 1,
   name: "Alberto",
   lastName: "Costas",
   phoneNumber: "4421234567"
  },
  {
    id: 2,
    name: "Jose",
    lastName: "Perez",
    phoneNumber: "4422345678"
  }
]
  create(createEmployeeDto: CreateEmployeeDto) {
    createEmployeeDto.id = this.employees.length + 1
    this.employees.push(createEmployeeDto)
    return createEmployeeDto;
  }

  findAll() {
    // Retorne todos los empleados
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.filter((employee)=>employee.id === id)[0];
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let employeeToUptade = this.findOne(id);
    employeeToUptade = {
      ...employeeToUptade,
      ...updateEmployeeDto,
    }
    this.employees = this.employees.map((employee)=> {
      if (employee.id === id) {
        employee = employeeToUptade
      }
      return employeeToUptade;
    })
  }
  remove(id: number) {
    this.employees = this.employees.filter((employee) => employee.id != id);
    return this.employees;
  }
}
