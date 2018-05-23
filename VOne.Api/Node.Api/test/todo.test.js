
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');
var mongoose = require("mongoose");
var config = require("config");
var lodash = require('lodash');
var sql = require("mssql");
var expect = chai.expect;
// var should = chai.should;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require("chai-sorted"));
chai.use(chaiHttp);
var moment = require('moment');
var SqlString = require('sqlstring');
var accountId = config.get("Testing.localAccountId");
var customerDBConnectionString = config.get("Testing.localCustomerConnectionString");
const ApiPath = config.get("Testing.ApiPath");
const allTodo = -999;
var todo = null;

var StartDate = moment().add(-1, 'day').format("YYYY-MM-DD");
var EndDate = moment().format("YYYY-MM-DD");
console.log(moment().format("YYYY-MM-DD"));


var executeSqlQuery = function (query, callback) {
    var sqlConnection = new sql.ConnectionPool(customerDBConnectionString);
    sqlConnection.connect().then(function (connectionPool) {
        var sqlCommand = connectionPool.request();
        sqlCommand.query(query).then(function (recordSet) {
            sqlConnection.close();
            callback(null, recordSet);
        }).catch(function (err) {
            sqlConnection.close();
            callback(err, null);
        });
    }).catch(function (err) {
        sqlConnection.close();
        callback(err, null);
    });
}

describe('Todo List statictics:-----------------------------------------------------------', function () {
    before(function (done) {
        // console.log("customerDBConnectionString:-------------------------------------");
        // console.log(customerDBConnectionString);
        var query = SqlString.format('SELECT * FROM dbo.[Todo] where Id > 0 and Id<>?', [allTodo]);        
        executeSqlQuery(query, function (error, recordSet) {
            if (error) {
                // console.log("in if:---------------------------------------------------------");
                throw error;
            } else {
                // console.log("in Else:---------------------------------------------------------");
                todo = recordSet.recordsets[0];              
            }
            done();
        });
    });

    // Start: Todo Lists:-----------------------------------------------------------------------
    it('Should return Track Details for one site:-----------------------------------------', function (done) {
        // console.log("Start: Todo Lists:---------------------------------------------------------------");
        chai.request(ApiPath)
            .get('/todo/gettodolist?userId=' + UserId + '&Id=1')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array', 'Should be a array');
                expect(res.body).to.not.be.null;
                done();
            });
    });
});
