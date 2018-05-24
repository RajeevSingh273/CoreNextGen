"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sql = require("mssql");
var lodash = require("lodash");
var SqlDBConnectivity = (function () {
    function SqlDBConnectivity(sqlConnectionString) {
        this.customerDBConnectionString = sqlConnectionString;
    }
    SqlDBConnectivity.prototype.getCustomerDatabaseConfig = function (accountId) {
        return this.customerDBConnectionString;
    };
    SqlDBConnectivity.prototype.executeSqlQuery = function (queryStatement, next) {
        // console.log(this.customerDBConnectionString);
        var sqlConnection = new sql.ConnectionPool(this.customerDBConnectionString);
        sqlConnection.connect().then(function (connectionPool) {
            var sqlCommand = connectionPool.request();
            // console.log("queryStatement......", queryStatement);
            sqlCommand.query(queryStatement).then(function (recordSet) {
                sqlConnection.close();
                next(null, recordSet);
            }).catch(function (err) {
                console.log("Query Execution Failed......", err);
                // console.log("Query Execution Failed......");
                sqlConnection.close();
                next(err, null);
            });
        }).catch(function (err) {
            sqlConnection.close();
            console.log("Sql Server Connection failed.......", err);
            next(err, null);
        });
    };
    SqlDBConnectivity.prototype.executeStoredProc = function (accountId, procedureName, parameters, next) {
        // console.log(this.customerDBConnectionString);
        var sqlConnection = new sql.ConnectionPool(this.getCustomerDatabaseConfig(accountId));
        sqlConnection.connect().then(function (connectionPool) {
            var sqlCommand = connectionPool.request();
            lodash.forEach(parameters, function (obj) {
                sqlCommand.input(obj.parameterName, obj.parameterValue);
            });
            sqlCommand.execute(procedureName).then(function (recordSet) {
                sqlConnection.close();
                next(null, recordSet);
            }).catch(function (err) {
                console.log("Query Execution Failed......", err);
                sqlConnection.close();
                next(err, null);
            });
        }).catch(function (err) {
            sqlConnection.close();
            console.log("Sql Server Connection failed.......", err);
            next(err, null);
        });
    };
    SqlDBConnectivity.prototype.executeStoredProcWithOutPut = function (accountId, procedureName, inputparameters, outputparameters, next) {
        // console.log(this.customerDBConnectionString);
        var sqlConnection = new sql.ConnectionPool(this.getCustomerDatabaseConfig(accountId));
        sqlConnection.connect().then(function (connectionPool) {
            var sqlCommand = connectionPool.request();
            lodash.forEach(inputparameters, function (obj) {
                sqlCommand.input(obj.parameterName, obj.parameterValue);
            });
            lodash.forEach(outputparameters, function (obj1) {
                sqlCommand.output(obj1.parameterName, obj1.parameterType, obj1.parameterValue);
            });
            sqlCommand.execute(procedureName).then(function (recordSet) {
                sqlConnection.close();
                next(null, recordSet);
            }).catch(function (err) {
                console.log("Query Execution Failed......");
                sqlConnection.close();
                next(err, null);
            });
        }).catch(function (err) {
            sqlConnection.close();
            console.log("Sql Server Connection failed.......");
            next(err, null);
        });
    };
    return SqlDBConnectivity;
}());
exports.SqlDBConnectivity = SqlDBConnectivity;
