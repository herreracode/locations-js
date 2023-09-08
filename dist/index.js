"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const JsonDBLocationRepository_1 = __importDefault(require("./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository"));
const Repository = new JsonDBLocationRepository_1.default();
exports.Repository = Repository;
console.log(Repository.getAllCountries());
