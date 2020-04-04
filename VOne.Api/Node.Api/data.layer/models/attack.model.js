"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Model Function for Querying API
var Query = (function () {
    function Query( Id, Ids) {
        this.Id = Id;
        this.Ids = Ids;        
    }
    return Query;
}());

exports.Query = Query;

//  Model function for Response => Used in ()
var AttackResponse = (function () {
    function AttackResponse(ResponseCode, Message, Attack) {
        this.ResponseCode = ResponseCode;
        this.Message = Message;
        this.Attack = Attack;
    }
    return AttackResponse;
}());
exports.AttackResponse = AttackResponse;

// Model function for Attack List => Used in ( )
var Attack = (function () {
    function Attack(id, attackId, starttime, direction, classification, ongoing, sourceip) {
        this.id = id;
        this.attackId = attackId;
        this.starttime = starttime;
        this.direction = direction;
        this.classification = classification;
        this.ongoing = ongoing;
        this.sourceip = sourceip;
    }
    return Attack;
}());
exports.Attack = Attack;