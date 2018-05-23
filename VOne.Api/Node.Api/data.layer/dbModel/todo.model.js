"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var config = require("config");

var todoList = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
    Id: {
        type: Number
    },
    status: {
        type: Number,
        default: 1

    },
    priority: {
        type: Number,
        default: 1
    }
    ,
    title: {
        type: String
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: new Date
    },

    updated: {
        type: Date,
        default: new Date
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