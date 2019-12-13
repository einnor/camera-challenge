"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
exports.routes = [
    {
        path: '/image/send',
        method: 'post',
        action: controllers_1.Images.send,
    },
];
//# sourceMappingURL=Images.js.map