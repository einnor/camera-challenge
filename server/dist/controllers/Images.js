"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lib_1 = require("../lib");
exports.send = async (request, response) => {
    const { file } = request;
    if (!file) {
        return lib_1.Api.badRequest(request, response, { error: 'Image is missing in the body' });
    }
    try {
        const imageName = lib_1.Image.generateName();
        const imageUrl = await lib_1.ImageStore.save(imageName, fs_1.default.readFileSync(file.path, 'utf8'));
        let sendMessageResult = {};
        if (typeof imageUrl === 'string') {
            sendMessageResult = await lib_1.ImageSend.send(imageUrl);
        }
        return response.json({ imageUrl, metadata: sendMessageResult });
    }
    catch (error) {
        console.error(`Error on putting s3 object: ${error}`);
        return lib_1.Api.internalError(request, response, error);
    }
};
//# sourceMappingURL=Images.js.map