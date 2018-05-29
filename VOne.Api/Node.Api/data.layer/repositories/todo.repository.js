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

    TodoRepository.prototype.GetTodoListMONGO = function (Query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            var _query = new todo.Query();
            _query = Query;
            objDBConnFact.dbMongoOpenConn();
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            var Qry;
            if (+_query.Id === -999) {
                Qry = [{ $sort: { Timestamp: -1 } }];
            } else {
                // Qry = [{ $match: { "UserId": +_query.UserId, _id: mongoose.Types.ObjectId(_query.Id) } }, { $sort: { Timestamp: -1 } }];
                Qry = [{ $match: { _id: mongoose.Types.ObjectId(_query.Id) } }, { $sort: { Timestamp: -1 } }];
            }
            TodoCollection.aggregate(Qry)
                .exec(function (err, result) {
                    if (err) {
                        objDBConnFact.dbMongoCloseConn();
                        callback(err, null);
                    }
                    else {
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
            TodoCollection.findById({ _id: mongoose.Types.ObjectId(_query.Id) }, ((err, todorslt) => {
                console.log(todorslt);
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
                            objDBConnFact.dbMongoCloseConn();
                            callback(null, rsltSave);
                        }
                    });
                }
            }));
        }
        finally {
            objDBConnFact.dbMongoCloseConn();
        }
    };

    TodoRepository.prototype.DeleteTodoMONGO = function (Query, callback) {
        var objDBConnFact = new dbConnectionFactory.DBConnectionFactory();
        try {
            var _query = new todo.Query();
            _query = Query;
            objDBConnFact.dbMongoOpenConn();
            var ids = _query.Ids.split(',');
            var TodoCollection = mongoose.model(config.get('database.TodoCollection'));
            TodoCollection.remove({ '_id': { '$in': ids } }, function (err) {
                if (err) {
                    console.log(err);
                    objDBConnFact.dbMongoCloseConn();
                    callback(errSave, null);
                }
                else {
                    objDBConnFact.dbMongoCloseConn();
                    callback(null, _query.Ids);
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

