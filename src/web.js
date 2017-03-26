"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
// Creates and configures an ExpressJS web server.
var Web = (function () {
    //Run configuration methods on the Express instance.
    function Web() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    Web.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(cookieParser());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    Web.prototype.routes = function () {
        this.express.use(express.static(path.join(__dirname, 'dash')));
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // placeholder route handler
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello typescript!!'
            });
        });
        this.express.use('/api/v1', router);
    };
    return Web;
}());
exports.default = new Web().express;
//# sourceMappingURL=web.js.map