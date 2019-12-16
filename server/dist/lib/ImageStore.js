"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS_1 = require("./AWS");
const save = (name, data) => {
    console.log(typeof data);
    console.log(data);
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'camera-challenge-ronnie',
            Key: `camera/${name}`,
            Body: Buffer.from(data, 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        };
        AWS_1.s3.putObject(params, (err, data) => {
            if (err) {
                console.log(err);
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