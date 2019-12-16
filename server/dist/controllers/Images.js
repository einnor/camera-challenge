"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
exports.send = async (request, response) => {
    console.log(request.body);
    const { image } = request.body;
    if (!image) {
        return lib_1.Api.badRequest(request, response, { error: 'Image is missing in the body' });
    }
    try {
        const imageName = lib_1.Image.generateName();
        const imageUrl = await lib_1.ImageStore.save(imageName, image);
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