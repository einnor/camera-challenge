"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = __importStar(require("aws-sdk"));
AWS.config.update({ region: 'us-east-1' });
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
exports.sqs = sqs;
const s3 = new AWS.S3();
exports.s3 = s3;
//# sourceMappingURL=AWS.js.map