"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_stamp_1 = __importDefault(require("console-stamp"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = require("./routes");
const lib_1 = require("./lib");
console_stamp_1.default(console, {
    pattern: 'mm/dd/yyyy HH:MM:ss.l',
});
const devResponseLogger = (req, res, next) => {
    if (process.env.NODE_ENV !== 'development') {
        return next();
    }
    console.log(`\n\nRESPONSE:\n\n${req.method} ${req.path} \
    \n  params: ${JSON.stringify(req.params)} \
    \n  query: ${JSON.stringify(req.query)} \
    \n  body: ${JSON.stringify(req.body)} \
    \n-> \
    \n${res.statusCode} ${res.statusMessage}`);
    next();
};
exports.app = async () => {
    const router = express_1.default();
    const port = parseInt(process.env.PORT || '8080');
    router.use(express_1.default.json({ limit: '1mb' }));
    router.use(cors_1.default());
    router.use(helmet_1.default());
    routes_1.Routes.forEach((route) => {
        router[route.method](route.path, (request, response, next) => {
            route
                .action(request, response)
                .then(() => next())
                .catch((err) => next(err));
        });
    });
    router.use(lib_1.Api.internalError);
    if (process.env.NODE_ENV !== 'test') {
        router.listen(port, () => {
            console.log(`Listening at http://localhost:${port}/`);
        });
    }
    router.use(devResponseLogger);
    return router;
};
//# sourceMappingURL=app.js.map