"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageStore = __importStar(require("./ImageStore"));
exports.ImageStore = ImageStore;
const ImageSend = __importStar(require("./ImageSend"));
exports.ImageSend = ImageSend;
const Image = __importStar(require("./Image"));
exports.Image = Image;
const AWS = __importStar(require("./AWS"));
exports.AWS = AWS;
const Api_1 = __importDefault(require("./Api"));
exports.Api = Api_1.default;
//# sourceMappingURL=index.js.map