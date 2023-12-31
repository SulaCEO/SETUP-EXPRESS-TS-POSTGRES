"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = __importDefault(require("../utils/CustomError"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        res.status(err.status).json({ message: err.message });
    }
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
};
exports.errorHandler = errorHandler;
