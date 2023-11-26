"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const path = '/api';
// Routes:
// router.use(path, (req, res, next) => {
//     return next(new CustomError('sas', 400));
// });
// don't forget about router as second parametr in use ^
exports.default = router;
