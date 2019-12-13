import * as AWS from 'aws-sdk';

// Set the AWS region and Access Key
AWS.config.update({ region: 'us-east-1' });
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID!;

// Create an AWS SQS service object
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

// Create an AWS S3 instance
const s3 = new AWS.S3();

export {
  sqs,
  s3,
}
