import { Request, Response } from 'express';

import { ImageStore, ImageSend, Image, Api } from '../lib';

/**
 * POST
 * Send the image in the request.
 *
 * @param request
 * @param response
 */
export const send = async (request: Request, response: Response) => {
  const image = request.body;
  const name = Image.generateName();
  try {
    const imageUrl = await ImageStore.save(name, image);
    if (typeof imageUrl === 'string') {
      ImageSend.send(imageUrl)
    }
    return response.json({ imageUrl });
  } catch (error) {
    console.error(`Error on putting s3 object: ${error}`);
    return Api.internalError(request, response, error);
  }
};