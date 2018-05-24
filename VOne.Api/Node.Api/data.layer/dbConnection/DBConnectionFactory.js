"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlConnection = require("./dbConnection.sql");
var mongoConnection = require("./dbConnection.mongo");
var config = require("config");
var Promise = require("bluebird");
var mssql = require("mssql");
var fs = require("fs");
var moment = require("moment-timezone");
var mongoConnection = require("./dbConnection.mongo");

var getAdminDBConnectionString = function () {
    return new Promise(function (resolve, reject) {
        try {
            var connString = config.get("authorization.database.adminConnectionString");
            resolve(connString);
        }
        catch (err) {
            reject(err);
        }
    });
};

var getCustomerDBConnectionString = function (userId) {
    return new Promise(function (resolve, reject) {
        getAdminDBConnectionString().then(function (connString) {
            var conn = new mssql.ConnectionPool(connString);
            conn.connect().then(function () {
                console.log("Successfully connected to Admin database");
                new mssql
                    .Request(conn)
                    .query("SELECT DatabaseServer, DatabaseName, DatabaseUserName, DatabaseUserPassword " +
                    "FROM UserAccount WHERE UserID = " + userId + " ")
                    .then(function (rs) {
                        if (rs && rs.rowsAffected[0] > 0) {
                            console.log("Got customer DB information");
                            var dbServer_1 = rs.recordset[0].DatabaseServer;
                            var mappings = config.get("authorization.mapping");
                            var serverIp = ((mappings.filter(function (el) { return el.key === dbServer_1; }))[0]).value;
                            var connString_1 = "mssql://" +
                                (rs.recordset[0].sDatabaseUserName + ":") +
                                (rs.recordset[0].sDatabaseUserPassword + "@") +
                                (serverIp + "/") +
                                ("" + rs.recordset[0].sDatabaseName);
                            conn.close().then(function () {
                                console.log("Successfully disconnected");
                                resolve(connString_1);
                            });
                        }
                        else {
                            reject("Unable to retrieve customer DB information");
                        }
                    }).catch(function (err) {
                        reject("Exception at SELECT query: " + err.message);
                    });
            }).catch(function (err) {
                reject("Exception when connecting to DB: " + err.message);
            });
        }).catch(function (err) {
            reject("Exception when getting adminDBConnectionString: " + err.message);
        });
    });
};

var DBConnectionFactory = (function () {
    function DBConnectionFactory() {

    }

    DBConnectionFactory.prototype.dbSqlConnectionFactory = function (type, accountId) {
        switch (type) {
            case "admin":
                return new sqlConnection.SqlDBConnectivity(config.get("authorization.database.adminConnectionString"));
                break;
            case "customer":
                var _connString;
                getCustomerDBConnectionString(parseInt(accountId)).then(function (connString) {
                    _connString = connString;
                });
                return new sqlConnection.SqlDBConnectivity(_connString);
                break;
            default:
                return null;
        }
    };

    DBConnectionFactory.prototype.dbSqlConnectionFactoryAcc = function (type, accountId) {
        return new Promise(function (resolve, reject) {
            switch (type) {
                case "admin":
                    resolve(new sqlConnection.SqlDBConnectivity(config.get("authorization.database.adminConnectionString")));
                    break;
                case "customer":
                    getCustomerDBConnectionString(accountId).then(function (connString) {
                        resolve(new sqlConnection.SqlDBConnectivity(connString));
                    });
                    break;
                default:
                   reject(new Error('Sql Server Connection not exists for ' + type));
            }
        }).catch(function (e) {
            throw e;
        });

    };

    DBConnectionFactory.prototype.dbMongoOpenConn = function () {
        return new mongoConnection.MongoConnection().openConn();
    };

    DBConnectionFactory.prototype.dbMongoCloseConn = function () {
        return new mongoConnection.MongoConnection().closeConn();
    };

    DBConnectionFactory.prototype.dbMongoCloseCurrentProcess = function () {
        return new mongoConnection.MongoConnection().closeCurrentProcess();
    };

    return DBConnectionFactory;
}());

exports.DBConnectionFactory = DBConnectionFactory;
