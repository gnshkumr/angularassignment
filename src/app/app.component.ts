import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todos=["Abc","efg","ijk"];

  add(newtodo : string){

  this.todos.push(newtodo);
  }
delete(todo){
  this.todos=this.todos.filter(t => (t!==todo));
}

deleteall(){
  this.todos=[];
}
update(msg,todo){
  this.todos[this.todos.indexOf(todo)]=msg;
}

}
