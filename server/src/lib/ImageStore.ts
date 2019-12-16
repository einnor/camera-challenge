import AWS, { AWSError } from 'aws-sdk';

import { s3 } from './AWS';

const save = (name: string, data: string): Promise <string | AWS.AWSError> => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: 'camera-challenge-ronnie',
      Key: `camera/${name}`,
      Body: Buffer.from(data, 'base64'),
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg'
    }

    s3.putObject(params, (err: AWSError, data: AWS.S3.PutObjectAclOutput) => {
      if (err) {
        reject(err)
      } else {
        resolve(`//camera-challenge-ronnie.s3.amazonaws.com/${params.Key}`)
      }
    });
  })
}

export {
  save
};