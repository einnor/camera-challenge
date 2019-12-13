"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS_1 = require("./AWS");
const send = async (imageUrl) => {
    if (typeof imageUrl !== 'string') {
        throw new Error(`Invalid image URL`);
    }
    const sqsMessage = { imageUrl };
    const queueUrl = process.env.AWS_SQS_IMAGE_ENDPOINT;
    const options = {
        QueueUrl: queueUrl || '',
        MessageBody: JSON.stringify(sqsMessage),
    };
    return new Promise((resolve, reject) => {
        AWS_1.sqs.sendMessage(options, (error, data) => {
            if (error) {
                throw new Error(`Unable to add ${imageUrl} request to queue: ${error.toString()}`);
            }
            resolve(data);
        });
    });
};
exports.send = send;
//# sourceMappingURL=ImageSend.js.map