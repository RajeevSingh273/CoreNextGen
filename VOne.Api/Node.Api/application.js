"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var todoRoutes = require("./api/routes/todo.Routes");

var todoCollection = require("./data.layer/dbModel/todo.model");

var config = require("config");
var WebServerApi = (function () {
    function WebServerApi(app) {
        this.app = app;
        console.log("inside web server api constructor");
        this.configureExpressRoute();
        this.webServerPort = config.get("webServerPort");
        this.configureStaticPath(app);
        this.configureMiddleware(app);
        this.configureBodyParser(app);
        this.configureRoutes(app);
        this.registerSchema();
    }

    WebServerApi.prototype.registerSchema = function () {
        todoCollection.todoSchema.RegisterTodoModelData();
    };

    WebServerApi.prototype.configureExpressRoute = function () {
        console.log("inside ConfigureExpressRoute");
        this.router = express.Router();
    };

    WebServerApi.prototype.configureStaticPath = function (app) {
        console.log("Inside ConfigureStaticPath");
        app.use(express.static(path.join(__dirname, "client")));
        app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));
    };

    WebServerApi.prototype.configureBodyParser = function (app) {
        console.log("Inside Body-Parser");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    };

    WebServerApi.prototype.configureMiddleware = function (app) {
        //console.log("inside configureMiddleware");
        app.use(this.allowCrossDomain);
        app.use(this.logRoutes);
    };

    WebServerApi.prototype.logRoutes = function (req, res, next) {
        //console.log(JSON.stringify(req));
        next();
    };

    WebServerApi.prototype.configureRoutes = function (app) {
        //console.log("Inside ConfigureRoutes");
        app.use("/api/", this.router);
        this.objTodoRoutes = new todoRoutes.TodoRoutes(this.router);
    };

    WebServerApi.prototype.run = function () {
        this.app.listen(this.webServerPort, function () {
            console.log("CoreNextGen API service is running on port : " + this.webServerPort);
        }.bind({ webServerPort: this.webServerPort }));
    };

    WebServerApi.prototype.allowCrossDomain = function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        next();
    };
    return WebServerApi;
}());
exports.WebServerApi = WebServerApi;
