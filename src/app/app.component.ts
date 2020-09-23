import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Array de cadastro
export class AppComponent {
  title = 'To-do list';
  todos = [{
  label:'Ivi Gonzales',
  done:false,
  priority:3
},
{
  label:'Justin Felix',
  done:false,
  priority:2
},
{
  label:'Helo Regina',
  done:true,
  priority:4
},
{
  label:'Luiz Pedro',
  done:false,
  priority:5
},
{
  label:'Enzo Roberto',
  done:true,
  priority:1
},
];

addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel,
    priority:1,
    done:false
  };

  //Function para cadastrar
  this.todos.push(newTodo);
  alert("Parabéns cadastro realizado com sucesso!")// Disparo de mensagem ao cadastrar
}

deleteTodo(todo){
  alert("Campo deletado com sucesso!")
  this.todos=this.todos.filter(t => t.label !== todo.label);
}

updateTodo(todo){
  alert("Ops: Algo deu errado!")
  this.todos=this.todos.filter(t => t.label !== todo.updateTodo);
}
}

