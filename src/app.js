"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create an express app.
const app = (0, express_1.default)();
// Parse the application/json request body.
app.use(express_1.default.json());
// Parse the x-www-form-urlencoded request body.
app.use(express_1.default.urlencoded({ extended: true }));
exports.default = app;
