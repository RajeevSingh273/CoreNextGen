"use strict";
exports.__esModule = true;
var todo_controller = require("../controllers/todo.controller");

var TodoRoutes = (function () {
    function TodoRoutes(router) {
        this.router = router;
        this.todoController = new todo_controller.TodoController();        
        this.init();
    }
    TodoRoutes.prototype.init = function () {       
        this.router.get('/gettodo',  this.todoController.GetTodoList); 
        this.router.post('/addtodo',  this.todoController.AddTodo); 
        this.router.put('/edittodo',  this.todoController.EditTodo);
        this.router.delete('/deletetodo',  this.todoController.DeleteTodo);  
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
