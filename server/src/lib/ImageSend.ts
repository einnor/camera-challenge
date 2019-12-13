import { SendMessageRequest } from 'aws-sdk/clients/sqs';

import { sqs } from './AWS';

const send = async (imageUrl: string): Promise<AWS.SQS.SendMessageResult> => {
  if (typeof imageUrl !== 'string') {
    throw new Error(`Invalid image URL`);
  }

  const sqsMessage = { imageUrl };

  const queueUrl = process.env.AWS_SQS_IMAGE_ENDPOINT;

  const options: SendMessageRequest = {
    QueueUrl: queueUrl || '',
    MessageBody: JSON.stringify(sqsMessage),
  };

  return new Promise((resolve, reject) => {
    sqs.sendMessage(options, (error: AWS.AWSError, data: AWS.SQS.SendMessageResult) => {
      if (error) {
        throw new Error(`Unable to add ${imageUrl} request to queue: ${error.toString()}`);
      }
      resolve(data);
    });
  });
}

export {
  send,
}