import { Request, Response } from 'express';
import fs from 'fs';

import { ImageStore, ImageSend, Api, Image } from '../lib';

/**
 * POST
 * Send the image in the request.
 *
 * @param request
 * @param response
 */
export const send = async (request: Request, response: Response) => {
  const { file } = request;
  if (!file) {
    return Api.badRequest(request, response, { error: 'Image is missing in the body' });
  }

  try {
    const imageName = Image.generateName();
    const imageUrl = await ImageStore.save(imageName, fs.readFileSync(file.path, 'utf8'));
    let sendMessageResult: AWS.SQS.SendMessageResult = {};
    if (typeof imageUrl === 'string') {
      sendMessageResult = await ImageSend.send(imageUrl);
    }
    return response.json({ imageUrl, metadata: sendMessageResult });
  } catch (error) {
    console.error(`Error on putting s3 object: ${error}`);
    return Api.internalError(request, response, error);
  }
};
