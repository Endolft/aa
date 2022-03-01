import { Todo } from "./todo.class";

export class TodoList {
  todos=[];
  
  constructor (){
    this.cargarLocalStorage();
  }
  
  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      console.log(todo, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }
    this.guardarLocalStorage();
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage (){
      localStorage.setItem('todo',JSON.stringify(this.todos));
  }

  cargarLocalStorage(){
    this.todos=(localStorage.getItem('todo'))
    ? JSON.parse(localStorage.getItem('todo')) :
     [];
    console.log()
    this.todos = this.todos.map ( obj=>Todo.fromJson (obj));
  }
}