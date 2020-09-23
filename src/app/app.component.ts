import { Component } from '@angular/core';

export class Employee {
  EmployeeID: number;
  Codigo: string;
  Nome: string;
}

const EmployeeArray: Employee[] = [
  { EmployeeID: 1, Codigo: "RJ", Nome: "Ruan Gonzales" },
  { EmployeeID: 2, Codigo: "SP", Nome: "Michael Silva" },
  { EmployeeID: 3, Codigo: "PE", Nome: "Ronaldo Marquês" },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeCollection = EmployeeArray;

  selectedEmployee: Employee = { EmployeeID: 0, Codigo: "", Nome: "" };

  OpenForEdit(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  AddOrEdit(): void {

    if (this.selectedEmployee.EmployeeID == 0)//inserir
    {
      this.selectedEmployee.EmployeeID = Math.max.apply(Math,this.employeeCollection.map(function(x){return x.EmployeeID;}))+1;
      this.employeeCollection.push(this.selectedEmployee);
    }
    this.selectedEmployee =  { EmployeeID: 0, Codigo: "", Nome: "" };
  }

  Delete() : void{
    alert("Cadastro deletado com sucesso!");
    this.employeeCollection = this.employeeCollection.filter(x => x != this.selectedEmployee);
    this.selectedEmployee =  { EmployeeID: 0, Codigo: "", Nome: "" };
  }
}
