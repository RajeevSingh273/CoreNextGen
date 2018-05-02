Open your terminal(cmd/powercell in Windows) and kindly follow the following steps.

Getting started

1. - mkdir todoListApi => To Create a Folder name todoList 

2. - cd todoListApi => Navigate to the root of your newly created folder 

3. - npm init => to Create a package.json file.

Package.json is a file that gives the necessary information to npm which allows it to identify the project as 

well as handle the project's dependencies.
npm init will prompt you to enter some information such as the app name, description, version, author, 

keyword and also ask if what you see is what you like.

4. - cd. >main.js => To create a file called main.js 
In this entry/main point of the API, we will writing the protocols to create our server.

5. - cd. >application.js => To create a file called application.js
In this applicatin/server, we will writing the protocols to create our server.

6. - mkdir api => To create a folder called api 

Inside this folder called api, create 4 separate folders called data.layer, business.layer, routes, and 

controllers by running 
- cd api
- mkdir controllers 
- mkdir data.layer
- mkdir business.layer
- mkdir routes

inside api/data.layer create 4 seprate folders called dbConnection, dbModels, ApiModels and repositories by 

running
- cd data.layer
- mkdir dbConnection
- mkdir dbModels
- mkdir ApiModels
- mkdir repositories

7. Create todoListController.js in the api/controller folder, todoListRoutes.js in the routes folder, and 

todoListModel in the model folder - touch api/controllers/todoListController.js api/models/todoListModel.js 

api/routes/todoListRoutes.js

Server setup

Let's install express and nodmon, express will be used to create the server while nodmon will help us to keep 

track of changes to our application by watching changed files and automatically restart the server.

npm install --save-dev nodemon

npm install express --save

1. now your package.json file will be modified to have the two newly installed packages.

{
  "name": "todolistapi",
  "version": "1.0.0",
  "description": "todolistapi for test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon main.js"
  },
  "author": "rajeev",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^1.17.3"
  },
  "dependencies": {
    "express": "^4.16.3"
  }
}

2. in aplication.js file copy/past the bellow code.

"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");

var WebServerApi = (function () {
    function WebServerApi(app) {
        this.app = app;
        console.log("Inside RESTful API server constructor");
        this.configureExpressRoute();
        this.webServerPort = 3001;
        this.configureRoutes(app);
    };	

    WebServerApi.prototype.configureExpressRoute = function () {
        console.log("inside ConfigureExpressRoute");
        this.router = express.Router();
    }; 

    WebServerApi.prototype.logRoutes = function (req, res, next) {
        console.log(JSON.stringify(req));
        next();
    };

    WebServerApi.prototype.configureRoutes = function (app) {
        console.log("Inside ConfigureRoutes");
        app.use("/api/", this.router);               
    };
	
    WebServerApi.prototype.run = function () {
        this.app.listen(this.webServerPort, function () {
            console.log("Todo List RESTful API service is started on port : " + this.webServerPort);
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


3. in main.js file copy/past the bellow code.

"use strict";
exports.__esModule = true;
//This is the entry/main point of this application

var express = require("express");
var applicationOBJ = require("./application");
var app = express();
var api = new applicationOBJ.WebServerApi(app);
api.run();


4. run npm run start this will start the server and you see...

> todolistapi@1.0.0 start C:\WorkSpace_Rajeev\TestProjects\todoListApi
> nodemon main.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node main.js`
Inside RESTful API server constructor
inside ConfigureExpressRoute
Inside ConfigureRoutes
Todo List RESTful API service is started on port : 3001

