"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const Pool = pg_1.default.Pool;
const pool = new Pool({
    user: 'sultan',
    password: '',
    host: 'localhost',
    port: 5433,
    database: 'db name my',
});
exports.default = pool;
