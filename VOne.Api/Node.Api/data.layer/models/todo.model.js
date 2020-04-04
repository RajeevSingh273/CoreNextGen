"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Model Function for Querying API
var Query = (function () {
    function Query(UserId, Id, Ids, title, description, status, priority, created, updated) {
        this.UserId = UserId;
        this.Id = Id;
        this.Ids = Ids;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
    }
    return Query;
}());
exports.Query = Query;

//  Model function for Response => Used in ()
var TodoResponse = (function () {
    function TodoResponse(ResponseCode, Message, Todo) {
        this.ResponseCode = ResponseCode;
        this.Message = Message;
        this.Todo = Todo;
    }
    return TodoResponse;
}());
exports.TodoResponse = TodoResponse;

// Model function for Todo List => Used in ( )
var Todo = (function () {
    function Todo(Id, title, description, status, priority, created, updated) {
        this.Id = Id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.created = created;
        this.updated = updated;
    }
    return Todo;
}());
exports.Todo = Todo;
