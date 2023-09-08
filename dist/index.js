"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.holaFunct = exports.JsonDBLocationRepository = void 0;
const JsonDBLocationRepository_1 = __importDefault(require("./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository"));
exports.JsonDBLocationRepository = JsonDBLocationRepository_1.default;
const Repository = new JsonDBLocationRepository_1.default();
const holaFunct = () => console.log("gola");
exports.holaFunct = holaFunct;
