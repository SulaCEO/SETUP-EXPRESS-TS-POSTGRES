"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, status) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.message = message || 'Something went wrong. Please try again.';
        this.status = status || 500;
    }
}
exports.default = CustomError;
