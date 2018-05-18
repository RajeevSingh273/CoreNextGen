"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var config = require("config");

var todoList = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Id: {
        type: Number
    },
    status: {
        type: Number
    },
    priority: {
        type: Number
    }
    ,
    title: {
        type: String
    },
    description: {
        type: String
    },
    created: {
        type: Date
    },

    updated: {
        type: Date
    },

});

var todoSchema = (function () {
    function todoSchema() {

    }
    todoSchema.RegisterTodoModelData = function () {
        mongoose.model(config.get('database.TodoCollection'), todoList, config.get('database.TodoCollection'));
    };
    return todoSchema;
}());
exports.todoSchema = todoSchema;