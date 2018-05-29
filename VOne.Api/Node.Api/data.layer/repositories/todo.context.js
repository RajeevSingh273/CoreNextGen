"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var SqlString = require('sqlstring');
var Promise = require("bluebird");
var todoRepository = require("./todo.repository");

var TodoContext = (function () {
    function TodoContext() {
    }

    TodoContext.prototype.GetTodoListMONGO = function (dQuery) {
        return new Promise(function (resolve, reject) {
            var ObjTodoRepository = new todoRepository.TodoRepository()
            ObjTodoRepository.GetTodoListMONGO(dQuery, function (err, result) {
                 if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }).catch(function (e) {
            throw e;
        });
    };

    TodoContext.prototype.AddTodoMONGO = function (dQuery) {
        return new Promise(function (resolve, reject) {
            var ObjTodoRepository = new todoRepository.TodoRepository()
            ObjTodoRepository.AddTodoMONGO(dQuery, function (err, result) {
                 if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }).catch(function (e) {
            throw e;
        });
    };

    TodoContext.prototype.EditTodoMONGO = function (dQuery) {
        return new Promise(function (resolve, reject) {
            var ObjTodoRepository = new todoRepository.TodoRepository()
            ObjTodoRepository.EditTodoMONGO(dQuery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }).catch(function (e) {
            throw e;
        });
    };

    TodoContext.prototype.DeleteTodoMONGO = function (dQuery) {
        return new Promise(function (resolve, reject) {
            var ObjTodoRepository = new todoRepository.TodoRepository()
            ObjTodoRepository.DeleteTodoMONGO(dQuery, function (err, result) {
                 if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }).catch(function (e) {
            throw e;
        });
    };

    TodoContext.prototype.GetTodoListSQL = function (dQuery) {
        return new Promise(function (resolve, reject) {
            var ObjTodoRepository = new todoRepository.TodoRepository()
            ObjTodoRepository.GetTodoListSQL(dQuery, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }).catch(function (e) {
            throw e;
        });
    };

    return TodoContext;
}());

exports.TodoContext = TodoContext;
