"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var mongoose = require("mongoose");
var config = require("config");
var sqlConfig = "";

var MongoConnection = (function () {
    function MongoConnection(sqlConnectionString) {
        this.mongoDbConnection = null;
        this.mongodburl = config.get("database.mongodb");
    }

    MongoConnection.prototype.openConn = function () {
        if (!mongoose.connection.readyState)
            if (this.mongoDbConnection == null) {
                mongoose.connect(this.mongodburl);
                this.mongoDbConnection = mongoose.connection;
                this.mongoDbConnection.on("error", console.error.bind(console, "connection error"));
                this.mongoDbConnection.once("open", function () {
                    console.log("Connection to Db is open...");
                });
            }
    };

    MongoConnection.prototype.closeConn = function () {
        if (this.mongoDbConnection) {
            this.mongoDbConnection.close();
            this.mongoDbConnection = null;
            console.log("Connection to Db is Closed...");
        } else {
            console.log("Connection to Db is already Closed...");
        }
    };

    return MongoConnection;
}());

exports.MongoConnection = MongoConnection;