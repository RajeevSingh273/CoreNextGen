"use strict";
exports.__esModule = true;

//This is the entry/main point of this application
/// <reference types="node" />
var express = require("express");
var applicationOB = require("./application");
var app = express();
var api = new applicationOB.WebServerApi(app);
api.run();
