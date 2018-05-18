"use strict";
exports.__esModule = true;
var requestClient = require("request");
var todoBusinessProcess = require("../../business.layer/todo.BusinessProcess");
var todo = require("../../data.layer/models/todo.model");

var TodoController = (function () {
    function TodoController() {
    }

    //Router is in todo.Routes.js
    TodoController.prototype.GetTodoList = function (req, res) {
        var Query = new todo.Query();
        Query.title = req.query.title;
        Query.description = req.query.description;
        Query.priority = req.query.priority;

        var objTodoBusinessProcess = new todoBusinessProcess.TodoBusinessProcess();
        // objTodoBusinessProcess.GetTodoListSQL(Query, function (err, result) {
        objTodoBusinessProcess.GetTodoListMONGO(Query, function (err, result) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    return TodoController;
}());
exports.TodoController = TodoController;
