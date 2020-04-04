"use strict";
exports.__esModule = true;
var requestClient = require("request");
var attackDataBusinessProcess = require("../../business.layer/attackData.BusinessProcess");
var attackData = require("../../data.layer/models/attackData.model");

var AttackDataController = (function () {
    function AttackDataController() {
    }

    //Router is in attackData.Routes.js
    AttackDataController.prototype.GetattackDataList = function (req, res) {
        var Query = new attackData.Query();       
        console.log(Query)
        var objattackDataBusinessProcess = new attackDataBusinessProcess.attackDataBusinessProcess();
        objattackDataBusinessProcess.GetattackDataList(Query, function (err, result) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res.status(200)
                    .json(result);
            }
        });
    };

    return AttackDataController;
}());
exports.AttackDataController = AttackDataController;
