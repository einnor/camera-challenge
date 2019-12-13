import AWS, { AWSError } from 'aws-sdk';

const s3 = new AWS.S3();

const save = (name: string, data: string): Promise <string | AWS.AWSError> => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: 'camera-challenge-ronnie',
      Key: `camera/${name}.pdf`,
      Body: Buffer.from(data, 'base64'),
      ContentEncoding: 'base64',
      ContentType: 'image/pdf'
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