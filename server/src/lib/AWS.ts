import AWS from 'aws-sdk';

// Set the AWS region and Access Key
AWS.config.update({ region: 'us-west-1' });
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID!;

// Create an AWS SQS service object
export const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
