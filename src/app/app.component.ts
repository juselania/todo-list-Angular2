import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
  label:'Hello Regina',
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

  this.todos.push(newTodo);
}

deleteTodo(todo){
  this.todos=this.todos.filter(t => t.label !== todo.label);
}

editeTodo(todo){
  this.todos=this.todos.filter(t => t.label !== todo.label);
}
}

