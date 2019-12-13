"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS_1 = require("./AWS");
const save = (name, data) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'camera-challenge-ronnie',
            Key: `camera/${name}.pdf`,
            Body: Buffer.from(data, 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/pdf'
        };
        AWS_1.s3.putObject(params, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(`//camera-challenge-ronnie.s3.amazonaws.com/${params.Key}`);
            }
        });
    });
};
exports.save = save;
//# sourceMappingURL=ImageStore.js.map