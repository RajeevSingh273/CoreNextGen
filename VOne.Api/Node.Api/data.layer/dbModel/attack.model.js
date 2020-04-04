"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var config = require("config");

var SourceIP =new mongoose.Schema({
    Id: {
        type: mongoose.Schema.Types.ObjectId
    },
    sourceipid: {
        type: String
    },
    type: {
        type: String
    }
})

var attackList = new mongoose.Schema({
    Id: {
        type: mongoose.Schema.Types.ObjectId
    },
    platform: {
        type: String
    },
    attackId: {
        type: String
    },
    starttime: {
        type: Date,
        default: new Date
    },
    direction: {
        type: String
    },
    classification: {
        type: String
    },
    ongoing: {
        type: boolean,
        default: false
    },
    sourceip: SourceIP
    

});

var attackSchema = (function () {
    function attackSchema() {

    }
    attackSchema.RegisterAttackModelData = function () {
        mongoose.model(config.get('database.AttackCollection'), attackList, config.get('database.AttackCollection'));
    };
    return attackSchema;
}());
exports.attackSchema = attackSchema;