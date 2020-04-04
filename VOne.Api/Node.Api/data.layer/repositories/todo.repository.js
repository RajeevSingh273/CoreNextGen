"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
// var moment = require('moment');
// var async = require("async");
var config = require('config');
var dbConnectionFactory = require("../dbConnection/DBConnectionFactory");
var todo = require("../models/todo.model");
var todoDBM = require("../dbModel/todo.model");


var TodoRepository = (function () {
    function TodoRepository() {

    }

    TodoRepository.prototype.GetTodoListMONGO = function (query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            objDBConnFact.dbMongoOpenConn();
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            var Qry;

            if (query.Id === -999) {
                Qry = [{ $match: { _id: query.Id } }, { $sort: { updated: -1 } }];
            } else {
                Qry = [{ $sort: { updated: -1 } }];
            }

            TodoCollection.aggregate(Qry)
                .exec(function (err, result) {
                    console.log(result)
                    if (err) {
                        objDBConnFact.dbMongoCloseConn();
                        callback(err, null);
                    } else {
                        objDBConnFact.dbMongoCloseConn();
                        callback(null, result);
                    }
                });
        }
        finally {
            objDBConnFact.dbMongoCloseConn();
        }
    };

    TodoRepository.prototype.AddTodoMONGO = function (Query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            var _query = new todo.Query();
            _query = Query;
            objDBConnFact.dbMongoOpenConn();
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            TodoCollection.create({
                title: _query.title,
                description: _query.description,
                prototype: _query.priority
            }, (err, result) => {
                if (err) {
                    objDBConnFact.dbMongoCloseConn();
                    callback(err, null);
                }
                else {
                    objDBConnFact.dbMongoCloseConn();
                    callback(null, result);
                }
            });
        }
        finally {
            objDBConnFact.dbMongoCloseConn();
        }
    };

    TodoRepository.prototype.EditTodoMONGO = function (Query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            var _query = new todo.Query();
            _query = Query;
            objDBConnFact.dbMongoOpenConn();
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            TodoCollection.findById({ _id: _query.Id }, ((err, todorslt) => {
                if (err) {
                    objDBConnFact.dbMongoCloseConn();
                    callback(err, null);
                }
                else {
                    todorslt.title = _query.title;
                    todorslt.description = _query.description;
                    todorslt.status = _query.status;
                    todorslt.priority = _query.priority;
                    todorslt.save((errSave, rsltSave) => {
                        if (errSave) {
                            console.log(errSave);
                            objDBConnFact.dbMongoCloseConn();
                            callback(errSave, null);
                        } else {
                            callback(null, rsltSave);
                        }
                    })


                }
            }));
        }
        finally {
            objDBConnFact.dbMongoCloseConn();
        }
    };

    TodoRepository.prototype.DeleteTodoListMONGO = function (Query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            var _query = new todo.Query();
            _query = Query;
            objDBConnFact.dbMongoOpenConn();
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            var Qry;
            if (_query.Id === -999) {
                Qry = [{ $match: { "UserId": +_query.UserId } }, { $sort: { Timestamp: -1 } }];
            } else {
                Qry = [{ $match: { "UserId": +_query.UserId, Id: _query.Id } }, { $sort: { Timestamp: -1 } }];
            }

            TodoCollection.aggregate(Qry)
                .exec(function (err, result) {
                    if (err) {
                        objDBConnFact.dbMongoCloseConn();
                        callback(err, null);
                    }
                    else {
                        if (err) {
                            console.log(err);
                            objDBConnFact.dbMongoCloseConn();
                            callback(err, null);
                        } else {
                            callback(null, result);
                        }
                    }
                });
        }
        finally {
            objDBConnFact.dbMongoCloseConn();
        }
    };

    TodoRepository.prototype.GetTodoListSQL = function (Query, callback) {
        var query = SqlString.format('select * from Todo where Id=?', [Query.Id]);
        var dbConnFactory = new dbConnectionFactory.DBConnectionFactory();
        dbConnFactory.dbSqlConnectionFactoryAcc('service').then(function (result) {
            result.executeSqlQuery(query, callback);
        }).catch(function (e) {
            callback(e, null);
        });
    };

    return TodoRepository;
}());
exports.TodoRepository = TodoRepository;

