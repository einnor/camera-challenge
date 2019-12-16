"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.routes = [
    {
        path: '/image/send',
        method: 'post',
        action: controllers_1.Images.send,
        middlewares: [middlewares_1.upload.single('image')],
    },
];
//# sourceMappingURL=Images.js.map