"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
app_1.app.listen(process.env.PORT, () => console.log(`shit is working on port = ${process.env.PORT}`));
