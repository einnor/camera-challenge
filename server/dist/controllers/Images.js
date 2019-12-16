"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const upload_1 = require("../middlewares/upload");
const lib_1 = require("../lib");
exports.send = async (request, response) => {
    console.log(request.body);
    const image = request.body;
    const name = lib_1.Image.generateName();
    try {
        const imageUrl = await lib_1.ImageStore.save(name, image);
        if (typeof imageUrl === 'string') {
            lib_1.ImageSend.send(imageUrl);
        }
        return response.json({ imageUrl });
    }
    catch (error) {
        console.error(`Error on putting s3 object: ${error}`);
        return lib_1.Api.internalError(request, response, error);
    }
};
const getAllImagesInDirectory = () => {
    var fileNames = [];
    fs_1.default.readdir(upload_1.IMAGE_DIR.concat('/'), (err, data) => {
        if (!err && data && data.length > 0) {
            data.forEach((fileName) => fileNames.push(fileName));
        }
    });
    return fileNames;
};
//# sourceMappingURL=Images.js.map