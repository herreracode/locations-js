"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holaFunct = exports.JsonDBLocationRepository = void 0;
var JsonDBLocationRepository_1 = require("./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository");
exports.JsonDBLocationRepository = JsonDBLocationRepository_1.default;
var Repository = new JsonDBLocationRepository_1.default();
var holaFunct = function () { return console.log("gola"); };
exports.holaFunct = holaFunct;
