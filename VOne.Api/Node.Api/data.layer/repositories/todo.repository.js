"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
// var moment = require('moment');
// var async = require("async");
var config = require('config');
var dbConnectionFactory = require("../dbConnection/DBConnectionFactory");
var todo = require("../models/todo.model");


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
            var Qry = [
                {
                    $match: {
                        "UserId": +_query.UserId
                        , Id: _query.Id
                    }
                }
                , { $sort: { Timestamp: -1 } }
            ];

            ReferenceCollection.aggregate(Qry)
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
        });
    };

    return TodoRepository;
}());
exports.TodoRepository = TodoRepository;

