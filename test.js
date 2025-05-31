"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracing_1 = require("scheduler/tracing");
var current = (0, tracing_1.unstable_getCurrent)();
console.log(current);
