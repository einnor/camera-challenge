"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
exports.send = async (request, response) => {
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
//# sourceMappingURL=Images.js.map