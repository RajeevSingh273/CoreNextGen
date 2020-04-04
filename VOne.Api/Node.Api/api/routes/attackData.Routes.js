"use strict";
exports.__esModule = true;
var attackData_controller = require("../controllers/attackData.controller");

var AttackDataRoutes = (function () {
    function AttackDataRoutes(router) {
        this.router = router;
        this.attackDataController = new attackData_controller.TodoController();        
        this.init();
    }
    TodoRoutes.prototype.init = function () {       
        this.router.get('/getAttackData',  this.attackDataController.); 
    };
    return AttackDataRoutes;
}());
exports.AttackDataRoutes = AttackDataRoutes;
